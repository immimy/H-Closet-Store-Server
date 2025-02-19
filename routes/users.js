const express = require('express');
const router = express.Router();

const { showCurrentUser } = require('../controllers/user');
const { authenticateUser } = require('../middleware/authentication');

router.route('/showMe').get([authenticateUser, showCurrentUser]);

module.exports = router;
