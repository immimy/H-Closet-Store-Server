const mongoose = require('mongoose');

const FeaturedSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: {
        values: ['bag', 'clothes', 'accessory', 'best seller'],
        message: '{VALUE} is not supported',
      },
      required: [true, 'product category must be provided'],
    },
    productID: {
      type: String,
      required: [true, 'product identifier must be provided'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Featured', FeaturedSchema);
