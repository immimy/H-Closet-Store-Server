const mongoose = require('mongoose');

const AccessorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'accessory name must be provided'],
      trim: true,
      maxLength: [30, 'accessory name can not be more than 30 characters'],
    },
    type: {
      type: String,
      required: [true, 'accessory type must be provided'],
    },
    brand: {
      type: String,
      required: [true, 'accessory brand must be provided'],
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
      required: [true, 'accessory image must be provided'],
    },
    description: {
      type: String,
      required: [true, 'accessory description must be provided'],
    },
    price: {
      type: Number,
      required: [true, 'accessory price must be provided'],
    },
    inventory: {
      type: Number,
      required: [true, 'accessory inventory must be provided'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Accessory', AccessorySchema);
