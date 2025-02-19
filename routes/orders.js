const express = require('express');
const router = express.Router();

const {
  createOrder,
  updateOrder,
  getCurrentUserOrders,
} = require('../controllers/orders');
const { authenticateUser } = require('../middleware/authentication');

router.route('/').post(authenticateUser, createOrder);
router.route('/showAllMyOrders').get(authenticateUser, getCurrentUserOrders);
router.route('/:id').patch(authenticateUser, updateOrder);

module.exports = router;
