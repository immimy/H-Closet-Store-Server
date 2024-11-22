const mongoose = require('mongoose');

const ClothesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'clothes name must be provided'],
      trim: true,
      maxLength: [30, 'clothes name can not be more than 30 characters'],
    },
    type: {
      type: String,
      required: [true, 'clothes type must be provided'],
    },
    brand: {
      type: String,
      required: [true, 'clothes brand must be provided'],
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
      required: [true, 'clothes image must be provided'],
    },
    description: {
      type: String,
      required: [true, 'clothes description must be provided'],
    },
    size: {
      type: [String],
      required: [true, 'clothes size must be provided'],
      default: undefined,
    },
    price: {
      type: Number,
      required: [true, 'clothes price must be provided'],
    },
    inventory: {
      type: [Number],
      required: [true, 'clothes inventory must be provided'],
      default: undefined,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Clothes', ClothesSchema);
