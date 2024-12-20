const express = require('express');
const router = express.Router();

const { getAllUsers, deleteAllUsers, showMe } = require('../controllers/user');
const authenticationMiddleware = require('../middleware/authentication');

router.route('/').get(getAllUsers).delete(deleteAllUsers);
router.route('/showMe').get(authenticationMiddleware, showMe);

module.exports = router;
