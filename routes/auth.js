const express = require('express');
const router = express.Router();

const { register, verifyEmail, login, logout } = require('../controllers/auth');
const authenticationMiddleware = require('../middleware/authentication');

router.post('/register', register);
router.get('/verify', verifyEmail);
router.post('/login', login);
router.get('/logout', [authenticationMiddleware, logout]);

module.exports = router;
