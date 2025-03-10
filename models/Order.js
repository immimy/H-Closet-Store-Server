const mongoose = require('mongoose');
const { isRequiredWhen } = require('../utilities/validator');
const { manipulateProducts } = require('../utilities/order');

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
    isPersisted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Update product inventory and sales figures
OrderSchema.post('save', async function () {
  const targetOrderStatus = ['Ordered', 'Failed', 'Canceled'];
  if (!targetOrderStatus.includes(this.status)) return;

  // Paid order
  // update sales figures (+)
  if (this.status === 'Ordered') {
    return manipulateProducts({
      orderItems: this.orderItems,
      updateSalesFigures: 'increase',
    });
  }

  // Failed order (failed to checkout)
  // update product inventory (+)
  if (this.status === 'Failed') {
    return manipulateProducts({
      orderItems: this.orderItems,
      updateInventory: 'increase',
    });
  }

  // Canceled order (refund)
  // update product inventory (+)
  // update sales figures (-)
  if (this.status === 'Canceled') {
    return manipulateProducts({
      orderItems: this.orderItems,
      updateInventory: 'increase',
      updateSalesFigures: 'decrease',
    });
  }
});

// Expire documents when order status is 'Pending' over 24 hours.
OrderSchema.index(
  { createdAt: 1 },
  {
    name: 'Partial-TTL-Index',
    partialFilterExpression: { status: 'Pending' },
    expireAfterSeconds: 60 * 60 * 24, // one day
  }
);

module.exports = mongoose.model('Order', OrderSchema);
