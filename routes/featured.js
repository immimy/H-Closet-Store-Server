const express = require('express');
const router = express.Router();

const {
  getAllBags,
  getAllClothes,
  getAllAccessories,
  getAllBestSeller,
} = require('../controllers/featured');

router.route('/bag').get(getAllBags);
router.route('/clothes').get(getAllClothes);
router.route('/accessory').get(getAllAccessories);
router.route('/best-seller');

module.exports = router;
