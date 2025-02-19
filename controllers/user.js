const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');

const showCurrentUser = async (req, res) => {
  const { userID } = req.user;
  const user = await User.findById(userID).select('-password');
  res.status(StatusCodes.OK).json({ user });
};

module.exports = {
  showCurrentUser,
};
