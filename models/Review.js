const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    order: {
      type: mongoose.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    orderItem: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    comment: {
      type: String,
      maxLength: [300, 'Text must not be more than 300 characters.'],
    },
  },
  { timestamps: true }
);

// Each order can have only one review per product.
ReviewSchema.index({ order: 1, orderItem: 1 }, { unique: true });

// Review static method
// update avg rating and num of reviews on the product
ReviewSchema.statics.calcAvgRating = async function (productID) {
  const result = await this.aggregate([
    { $match: { product: productID } },
    {
      $group: {
        _id: null,
        avgRating: { $avg: '$rating' },
        numOfReviews: { $sum: 1 },
      },
    },
  ]);

  try {
    await this.model('Product').findOneAndUpdate(
      {
        _id: productID,
      },
      {
        avgRating: result[0]?.avgRating || 0,
        numOfReviews: result[0]?.numOfReviews || 0,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// Update avg Rating and num of Reviews when
// 1. Create / Update review
ReviewSchema.post('save', async function () {
  await this.constructor.calcAvgRating(this.product);
});
// 2. Delete review
ReviewSchema.post('findOneAndDelete', async function (doc) {
  await this.model.calcAvgRating(doc.product);
});

module.exports = mongoose.model('Review', ReviewSchema);
