const express = require('express');
const router = express.Router();

const {
  register,
  verifyEmail,
  login,
  logout,
  forgotPassword,
  resetPassword,
} = require('../controllers/auth');
const { authenticateUser } = require('../middleware/authentication');
const { forbidDemoUser } = require('../middleware/authorization');

router.post('/register', register);
router.post('/login', login);
router.delete('/logout', [authenticateUser, logout]);
router.post('/verify-email', verifyEmail);
router.post('/forgot-password', [forbidDemoUser, forgotPassword]);
router.patch('/reset-password', [forbidDemoUser, resetPassword]);

module.exports = router;
