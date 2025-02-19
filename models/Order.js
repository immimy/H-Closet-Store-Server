const mongoose = require('mongoose');
const { isRequiredWhen } = require('../utilities/validator');
const Product = require('./Product');
const {
  updateProductInventory,
  getInventoryIndex,
} = require('../utilities/order');

const SingleOrderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  color: {
    type: String,
    default: null,
    validate: isRequiredWhen({
      condition: (doc) => doc.category === 'bag',
      field: 'color',
    }),
  },
  size: {
    type: String,
    default: null,
    validate: isRequiredWhen({
      condition: (doc) => doc.category === 'clothes',
      field: 'size',
    }),
  },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
});

const ShippingAddressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
});

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: [
        'Pending',
        'Failed',
        'Ordered',
        'Packed',
        'In Transit',
        'Delivered',
        'Canceled',
      ],
      default: 'Pending',
    },
    orderItems: [SingleOrderItemSchema],
    subtotal: { type: Number, required: true },
    shippingFee: { type: Number, required: true },
    total: { type: Number, required: true },
    giftService: { type: Boolean, default: false },
    paymentMethod: {
      type: String,
      enum: ['credit card', 'cash on delivery'],
      required: true,
    },
    shippingAddress: { type: ShippingAddressSchema, required: true },
    clientSecret: {
      type: String,
      default: null,
      validate: isRequiredWhen({
        condition: (doc) => doc.paymentMethod === 'credit card',
        message: 'clientSecret must be provided',
      }),
    },
    paymentIntentID: { type: String },
  },
  { timestamps: true }
);

// Update product inventory when
// 1. Client place order
// 2. Order failed or client cancel order
OrderSchema.post('save', async function () {
  const targetOrderStatus = ['Pending', 'Ordered', 'Failed', 'Canceled'];

  const orderStatus = this.status;
  const orderPaymentMethod = this.paymentMethod;
  const orderItems = this.orderItems;

  if (!targetOrderStatus.includes(orderStatus)) return;

  for (const singleOrderItem of orderItems) {
    const { product: productID, size, color, amount } = singleOrderItem;

    const product = await Product.findById(productID);
    const inventoryIndex = getInventoryIndex({
      product,
      option: size || color,
    });
    const updatedInventory = [...product.inventory];

    // Place order
    if (
      orderStatus === 'Pending' ||
      (orderPaymentMethod === 'cash on delivery' && orderStatus === 'Ordered')
    ) {
      updatedInventory[inventoryIndex] -= amount;
      product.inventory = updatedInventory;
      await product.save();
    }

    // Order failed or Cancel order
    if (orderStatus === 'Failed' || orderStatus === 'Canceled') {
      updatedInventory[inventoryIndex] += amount;
      product.inventory = updatedInventory;
      await product.save();
    }
  }
});

module.exports = mongoose.model('Order', OrderSchema);
