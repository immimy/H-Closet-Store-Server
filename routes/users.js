const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  deleteAllUsers,
  showCurrentUser,
} = require('../controllers/user');
const { authenticateUser } = require('../middleware/authentication');

router.route('/').get(getAllUsers).delete(deleteAllUsers);
router.route('/showMe').get([authenticateUser, showCurrentUser]);

module.exports = router;
