const mongoose = require('mongoose');

const BagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'product name must be provided'],
      trim: true,
      maxLength: [30, 'product name can not be more than 30 characters'],
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
      required: [true, 'product color must be provided'],
      default: undefined,
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
  },
  { timestamps: true }
);

module.exports = mongoose.model('Bag', BagSchema);
