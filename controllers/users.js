const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');
const Order = require('../models/Order');
const Token = require('../models/Token');

// When deleting a registered user, also remove their associated token and orders belonging to that user.
const changeStream = User.watch();
changeStream.on('change', async (change) => {
  if (change.operationType !== 'delete') return;

  await Order.deleteMany({ user: change.documentKey._id });
  await Token.deleteMany({ user: change.documentKey._id });
});

const showCurrentUser = async (req, res) => {
  const { userID } = req.user;
  const user = await User.findById(userID).select('-password');
  res.status(StatusCodes.OK).json({ user });
};

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(StatusCodes.OK).json({ userCount: users.length, users });
};

const deleteSingleUser = async (req, res) => {
  const { id } = req.params;
  await User.findOneAndDelete({ _id: id });
  res.status(StatusCodes.OK).json({ msg: 'User deleted!' });
};

module.exports = {
  showCurrentUser,
  getAllUsers,
  deleteSingleUser,
};
