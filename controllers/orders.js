const { StatusCodes } = require('http-status-codes');
const Order = require('../models/Order');
const Product = require('../models/Product');
const CustomError = require('../errors');
const {
  createPaymentIntent,
  cancelPaymentIntent,
} = require('../utilities/payment');
const { getStockQuantity } = require('../utilities/order');
const { checkPermission } = require('../utilities/checkPermission');

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

    const { _id, name, category, image, price } = dbProduct;
    const singleOrderItem = {
      product: _id,
      name,
      category,
      image,
      size: itemSize,
      color: itemColor,
      price,
      amount: itemAmount,
    };

    // Add item to order items
    orderItems = [...orderItems, singleOrderItem];
    // Calculate order subtotal
    subtotal += price * itemAmount;
  }

  const total = subtotal + shippingFee;

  const shippingAddress = {
    name: name.trim(),
    address: address.trim(),
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
  order.save();

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
    .limit(limit);

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
