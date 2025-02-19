const express = require('express');
const router = express.Router();

const {
  showCurrentUser,
  deleteSingleUser,
  getAllUsers,
} = require('../controllers/user');
const { authenticateUser } = require('../middleware/authentication');
const { authorizePermission } = require('../middleware/authorization');

router
  .route('/')
  .get(authenticateUser, authorizePermission('admin'), getAllUsers);
router.route('/showMe').get(authenticateUser, showCurrentUser);
router
  .route('/:id')
  .delete(authenticateUser, authorizePermission('admin'), deleteSingleUser);

module.exports = router;
