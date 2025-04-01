const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  getBestsellerProducts,
  updateProduct,
  deleteProduct,
  createProduct,
} = require('../controllers/products');
const { getAllProductReviews } = require('../controllers/reviews');
const { authenticateUser } = require('../middleware/authentication');
const { authorizePermission } = require('../middleware/authorization');

router
  .route('/')
  .get(getAllProducts)
  .post(authenticateUser, authorizePermission('admin'), createProduct);
router.route('/bestseller').get(getBestsellerProducts);
router
  .route('/:id')
  .get(getSingleProduct)
  .patch(authenticateUser, authorizePermission('admin'), updateProduct)
  .delete(authenticateUser, authorizePermission('admin'), deleteProduct);
router.route('/:id/reviews').get(getAllProductReviews);

module.exports = router;
