const { StatusCodes } = require('http-status-codes');
const Order = require('../models/Order');
const Product = require('../models/Product');
const CustomError = require('../errors');
const {
  createPaymentIntent,
  cancelPaymentIntent,
} = require('../utilities/payment');
const {
  getStockQuantity,
  getInventoryIndex,
  manipulateProducts,
} = require('../utilities/order');
const { checkPermission } = require('../utilities/checkPermission');
const { randomData } = require('../utilities/random');
const { firstNames, lastNames, addresses: fakeAddresses } = require('../data');

// FIX BUG
// Client doesn't check out until MongoDB automatically deletes that order by TTL indexes,
// so we need to update product inventory (+)
// and cancel payment intent to Stripe.
const changeStream = Order.watch([], {
  fullDocumentBeforeChange: 'whenAvailable',
});
changeStream.on('change', async (change) => {
  if (change.operationType !== 'delete') return;
  const { fullDocumentBeforeChange: order } = change;
  if (!order || order?.status !== 'Pending') return;
  const { orderItems, clientSecret } = order;

  // cancel payment intent
  const paymentIntentID = clientSecret.split('_').slice(0, 2).join('_');
  cancelPaymentIntent({ paymentIntentID });

  // update product inventory (+)
  manipulateProducts({
    orderItems,
    updateInventory: 'increase',
  });
});

const createOrder = async (req, res) => {
  const { userID } = req.user;
  const { cartItems, paymentMethod, giftService, name, address } = req.body;
  const shippingFee = +req.body.shippingFee;

  // Check if client provides data
  if (!cartItems || cartItems.length < 1) {
    throw new CustomError.BadRequestError('No cart items provided');
  }
  if (!shippingFee && shippingFee !== 0) {
    throw new CustomError.BadRequestError('Please provide shipping fee');
  }
  if (!paymentMethod) {
    throw new CustomError.BadRequestError('Please provide payment method');
  }
  if (!name || !address) {
    throw new CustomError.BadRequestError('Please provide shipping address');
  }

  // Validate cart items & Create order items & Calculate subtotal
  let orderItems = [];
  let subtotal = 0;
  let discounts = 0;
  for (const item of cartItems) {
    const { productID, size: itemSize, color: itemColor } = item;
    const itemAmount = +item.amount;

    const dbProduct = await Product.findById(productID);
    const dbAmount = getStockQuantity({
      product: dbProduct,
      option: itemSize?.toLowerCase() || itemColor?.toLowerCase(),
    });

    // Check if cart item exists in the database.
    if (!dbProduct) {
      throw new CustomError.NotFoundError(
        `No product with id : ${item.productID}`
      );
    }
    // Check if cart item exceeds the quantity in stock.
    if (itemAmount > dbAmount) {
      throw new CustomError.BadRequestError(
        `Product with id '${productID}' exceeds the available quantity.`
      );
    }

    const {
      _id,
      name,
      category,
      image,
      price,
      isOnSale,
      discount,
      sellingPrice,
    } = dbProduct;
    // const sellingPrice = isOnSale ? price * (1 - discount / 100) : price;
    const singleOrderItem = {
      product: _id,
      name,
      category,
      image,
      size: itemSize,
      color: itemColor,
      price,
      isOnSale,
      discount,
      sellingPrice,
      amount: itemAmount,
    };

    // Add item to order items
    orderItems = [...orderItems, singleOrderItem];
    // Calculate order subtotal
    subtotal += sellingPrice * itemAmount;
    // Calculate discounts
    if (isOnSale) {
      discounts += itemAmount * (price - sellingPrice);
    }

    // When client places an order
    // update product inventory (-)
    const inventoryIndex = getInventoryIndex({
      product: dbProduct,
      option: itemSize || itemColor,
    });
    const updatedInventory = [...dbProduct.inventory];
    updatedInventory[inventoryIndex] -= itemAmount;
    dbProduct.inventory = updatedInventory;
    await dbProduct.save();
  }

  const total = Math.round(subtotal + shippingFee);

  // Set default shipping address for demo user
  const isDemoUser = req.user.username === 'demo';
  const shippingAddress = {
    name: isDemoUser
      ? `${randomData(firstNames)} ${randomData(lastNames)}`
      : name.trim(),
    address: isDemoUser ? randomData(fakeAddresses) : address.trim(),
  };

  let paymentIntent = null;
  if (paymentMethod === 'credit card') {
    paymentIntent = await createPaymentIntent({
      amount: total,
      currency: 'thb',
    });
  }

  let status = undefined;
  if (paymentMethod === 'cash on delivery') {
    status = 'Ordered';
  }

  // Create order
  const order = await Order.create({
    user: userID,
    status,
    orderItems,
    subtotal,
    shippingFee,
    total,
    giftService: giftService === 'on' ? true : false,
    paymentMethod,
    shippingAddress,
    clientSecret: paymentIntent?.clientSecret,
    discounts,
  });

  res.status(StatusCodes.CREATED).json({ order });
};

const updateOrder = async (req, res) => {
  const { id: orderID } = req.params;
  const { paymentIntentID, clientSecret, status } = req.body;

  const order = await Order.findById(orderID);

  // Check if order exist in the database
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${orderID}`);
  }

  // Check if client owns this order
  checkPermission({ requestUser: req.user, resourceUserID: order.user });

  // Cancel order manually
  // (Client navigate away from the Checkout page before paying the order.)
  if (clientSecret && status === 'Failed') {
    const paymentIntentID = clientSecret.split('_').slice(0, 2).join('_');
    cancelPaymentIntent({ paymentIntentID });
  }

  // Update order data
  order.paymentIntentID = paymentIntentID;
  order.status = status;
  await order.save();

  res.status(StatusCodes.OK).json({ order });
};

const getCurrentUserOrders = async (req, res) => {
  // Sort
  const sort = '-createdAt _id';
  // Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const totalOrder = await Order.countDocuments({ user: req.user.userID });

  const orders = await Order.find({ user: req.user.userID })
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .populate('reviewCount');

  // Data to send back
  const meta = {
    pagination: {
      totalOrder,
      currentPage: page,
      totalPage: Math.ceil(totalOrder / limit) || 1,
    },
  };
  const data = { orderCount: orders.length, orders };

  res.status(StatusCodes.OK).json({ meta, data });
};

const getSingleOrder = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findById(id);
  checkPermission({ requestUser: req.user, resourceUserID: order.user });
  res.status(StatusCodes.OK).json({ order });
};

module.exports = {
  createOrder,
  updateOrder,
  getCurrentUserOrders,
  getSingleOrder,
};
