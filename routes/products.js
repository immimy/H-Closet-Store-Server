const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  getBestsellerProducts,
  updateProduct,
} = require('../controllers/products');
const { authenticateUser } = require('../middleware/authentication');
const { authorizePermission } = require('../middleware/authorization');

router.route('/').get(getAllProducts);
router.route('/bestseller').get(getBestsellerProducts);
router
  .route('/:id')
  .get(getSingleProduct)
  .post(authenticateUser, authorizePermission('admin'), updateProduct);

module.exports = router;
