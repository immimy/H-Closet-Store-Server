const { StatusCodes } = require('http-status-codes');
const Review = require('../models/Review');
const Order = require('../models/Order');
const CustomError = require('../errors');
const { checkPermission } = require('../utilities/checkPermission');
const { randomData } = require('../utilities/random');
const { reviews: fakeReviews } = require('../data');

const getAllReviews = async (req, res) => {
  // Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const totalReview = await Review.countDocuments({});
  const reviews = await Review.find({}).skip(skip).limit(limit);

  // Data to send back
  const meta = {
    pagination: {
      totalReview,
      currentPage: page,
      totalPage: Math.ceil(totalReview / limit) || 1,
    },
  };
  const data = { reviewCount: reviews.length, reviews };

  res.status(StatusCodes.OK).json({ meta, data });
};

const getCurrentUserReviews = async (req, res) => {
  // Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const totalReview = await Review.countDocuments({ user: req.user.userID });
  const reviews = await Review.find({ user: req.user.userID })
    .skip(skip)
    .limit(limit)
    .select('-user')
    .populate({
      path: 'product',
      select: 'name category brand image',
    });

  // Data to send back
  const meta = {
    pagination: {
      totalReview,
      currentPage: page,
      totalPage: Math.ceil(totalReview / limit) || 1,
    },
  };
  const data = { reviewCount: reviews.length, reviews };

  res.status(StatusCodes.OK).json({ meta, data });
};

const getAllProductReviews = async (req, res) => {
  // Search
  const { rating } = req.query;
  let queryObject = {};
  if (rating && rating !== 'all') {
    queryObject.rating = rating;
  }
  // Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const totalReview = await Review.countDocuments({ product: req.params.id });
  const reviews = await Review.find({ product: req.params.id, ...queryObject })
    .sort('-createdAt _id')
    .skip(skip)
    .limit(limit)
    .populate({ path: 'user', select: 'username updatedAt' });

  // Data to send back
  const meta = {
    enum: {
      ratingList: ['all', '5', '4', '3', '2', '1'],
    },
    pagination: {
      totalReview,
      currentPage: page,
      totalPage: Math.ceil(totalReview / limit) || 1,
    },
  };
  const data = { reviewCount: reviews.length, reviews };

  res.status(StatusCodes.OK).json({ meta, data });
};

const getSingleReview = async (req, res) => {
  const review = await Review.findById(req.params.id).populate({
    path: 'product',
    select: 'name category brand image',
  });

  if (!review) {
    throw new CustomError.NotFoundError(`No review with id : ${req.params.id}`);
  }

  res.status(StatusCodes.OK).json({ review });
};

const createReviews = async (req, res) => {
  const { order: orderID, reviews } = req.body;

  // Check if user provides order and reviews.
  if (!orderID || !reviews || reviews?.length < 1) {
    throw new CustomError.BadRequestError('Please provide order and reviews.');
  }

  // Check if order exists in the db.
  const dbOrder = await Order.findById(orderID);
  if (!dbOrder) {
    throw new CustomError.NotFoundError(`There is no order with id ${orderID}`);
  }
  // Check if order belongs to the request user.
  checkPermission({
    requestUser: req.user,
    resourceUserID: dbOrder.user,
  });
  // Check if client already purchased products
  // and time does not exceed 2 weeks after last update.
  const allowedOrderStatus = ['Ordered', 'Packed', 'In Transit', 'Delivered'];
  const isExceedTwoWeeks =
    Date.now() > dbOrder.updatedAt.getTime() + 1000 * 60 * 60 * 24 * 7 * 2;
  if (!allowedOrderStatus.includes(dbOrder.status) || isExceedTwoWeeks) {
    throw new CustomError.UnauthorizedError(
      'Reviews can only be created if clients have paid for the order or submitted a review within the allowed period.'
    );
  }

  let reviewsArray = [];
  const dbOrderItems = [...dbOrder.orderItems];
  for (const review of reviews) {
    const { orderItem: orderItemID, rating } = review;
    // Random comment based on input rating.
    const comment = randomData(fakeReviews[`${rating}-star`]);

    // Check if reviews have data structure as we need.
    if (!orderItemID || !rating) {
      throw new CustomError.BadRequestError(
        'Please provide order item id and rating.'
      );
    }

    // Check if users review product that they didn't purchase.
    const index = dbOrderItems.findIndex(
      (item) => item._id.toString() === orderItemID
    );
    if (index === -1) {
      throw new CustomError.NotFoundError(
        `There is no order item with id ${orderItemID} in this order.`
      );
    }

    // Add review to reviews array
    reviewsArray.push({
      user: req.user.userID,
      order: orderID,
      orderItem: orderItemID,
      product: dbOrderItems[index].product,
      rating,
      comment,
    });
    // Remove this item from array to reduce search time
    dbOrderItems.splice(index, 1);
  }

  // Create reviews for this order
  const newReviews = await Review.create(reviewsArray);

  res
    .status(StatusCodes.CREATED)
    .json({ reviewCount: newReviews.length, reviews: newReviews });
};

const updateReview = async (req, res) => {
  const { rating, comment } = req.body;

  if (!rating) {
    throw new CustomError.BadRequestError(
      'Please provide rating of the product.'
    );
  }

  const review = await Review.findById(req.params.id);

  if (!review) {
    throw new CustomError.NotFoundError(`No review with id : ${req.params.id}`);
  }

  review.rating = rating;
  review.comment = comment;
  await review.save();

  res.status(StatusCodes.OK).json({ review });
};

const deleteReview = async (req, res) => {
  await Review.findOneAndDelete({ _id: req.params.id });
  res.status(StatusCodes.OK).json({ msg: 'Review deleted!' });
};

module.exports = {
  getAllReviews,
  getCurrentUserReviews,
  getAllProductReviews,
  getSingleReview,
  createReviews,
  updateReview,
  deleteReview,
};
