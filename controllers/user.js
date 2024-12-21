const { StatusCodes } = require('http-status-codes');
const User = require('../models/user');

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(StatusCodes.OK).json({ userCount: users.length, users });
};

const showCurrentUser = async (req, res) => {
  const { id } = req.user;
  const user = await User.findById(id).select('-password');
  res.status(StatusCodes.OK).json({ user });
};

// 🌱 DEV
const deleteAllUsers = async (req, res) => {
  await User.deleteMany({});
  res.status(StatusCodes.OK).json({ msg: 'Success to delete all users!' });
};

module.exports = {
  getAllUsers,
  showCurrentUser,
  deleteAllUsers,
};
