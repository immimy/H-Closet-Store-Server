const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
} = require('../controllers/products');

router.route('/').get(getAllProducts);
router.route('/:id').get(getSingleProduct);

module.exports = router;
