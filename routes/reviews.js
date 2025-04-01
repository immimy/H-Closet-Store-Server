const express = require('express');
const router = express.Router();

const {
  getAllReviews,
  getSingleReview,
  createReviews,
  updateReview,
  deleteReview,
  getCurrentUserReviews,
} = require('../controllers/reviews');
const { authenticateUser } = require('../middleware/authentication');
const { authorizePermission } = require('../middleware/authorization');

router
  .route('/')
  .get(authenticateUser, authorizePermission('admin'), getAllReviews)
  .post(authenticateUser, createReviews);
router.route('/showAllMyReviews').get(authenticateUser, getCurrentUserReviews);
router
  .route('/:id')
  .get(authenticateUser, getSingleReview)
  .patch(authenticateUser, updateReview)
  .delete(authenticateUser, authorizePermission('admin'), deleteReview);

module.exports = router;
