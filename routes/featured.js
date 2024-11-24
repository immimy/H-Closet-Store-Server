const express = require('express');
const router = express.Router();

const { getAllFeaturedProducts } = require('../controllers/featured');

router.route('/').get(getAllFeaturedProducts);

module.exports = router;
