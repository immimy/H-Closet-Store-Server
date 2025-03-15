const mongoose = require('mongoose');
const { isRequiredWhen } = require('../utilities/validator');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'product name must be provided'],
      trim: true,
      maxLength: [50, 'product name can not be more than 50 characters'],
    },
    category: {
      type: String,
      required: [true, 'product category must be provided'],
      trim: true,
      enum: {
        values: ['bag', 'clothes', 'accessory'],
        message: '{VALUE} is not supported',
      },
    },
    type: {
      type: String,
      required: [true, 'product type must be provided'],
    },
    brand: {
      type: String,
      required: [true, 'product brand must be provided'],
      trim: true,
      enum: {
        values: [
          'Aero Style',
          'Free Spirit',
          'Legacy Trek',
          'Prestige',
          'Calista',
          'Wander Lux',
        ],
        message: '{VALUE} is not supported',
      },
    },
    image: {
      type: String,
      required: [true, 'product image must be provided'],
    },
    description: {
      type: String,
      required: [true, 'product description must be provided'],
    },
    color: {
      type: [String],
      default: null,
      validate: isRequiredWhen({
        condition: (doc) => doc.category === 'bag',
        field: 'color',
      }),
    },
    size: {
      type: [String],
      default: null,
      validate: isRequiredWhen({
        condition: (doc) => doc.category === 'clothes',
        field: 'size',
      }),
    },
    price: {
      type: Number,
      required: [true, 'product price must be provided'],
    },
    inventory: {
      type: [Number],
      required: [true, 'product inventory must be provided'],
      default: undefined,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    salesFigures: {
      type: Number,
      default: 0,
    },
    isOnSale: {
      type: Boolean,
      default: false,
    },
    discount: {
      type: Number, // like 10% discount from price
      default: 0,
    },
    sellingPrice: Number,
  },
  { timestamps: true }
);

// Calculate selling price automatically if any of price, isOnSale or discount is updated.
ProductSchema.pre('save', function () {
  if (!this.isModified('price isOnSale discount')) return;

  this.sellingPrice = this.isOnSale
    ? this.price * (1 - this.discount / 100)
    : this.price;
});

module.exports = mongoose.model('Product', ProductSchema);
