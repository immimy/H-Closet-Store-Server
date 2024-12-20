const User = require('../models/user');
const CustomError = require('../errors');
const { StatusCodes } = require('http-status-codes');
const crypto = require('crypto');
const validator = require('validator');
const { sendVerificationEmail } = require('../utilities/sendEmail');
const { millisecondToMinuteFormat } = require('../utilities/fomatter');
const { createJWT, attachCookieToResponse } = require('../utilities/jwt');

const register = async (req, res) => {
  const { username, email, password } = req.body;

  // input validation
  if (!username || !email || !password) {
    throw new CustomError.BadRequestError('Please provide all values.');
  }

  // set up variable
  const verificationToken = crypto.randomBytes(40).toString('hex');
  const halfHour = 1000 * 60 * 30;
  const verificationTokenExpirationDate = new Date(Date.now() + halfHour);
  const tokenLifetime = millisecondToMinuteFormat(halfHour);
  const origin = 'http://localhost:5000/api/v1';

  // create user (pending for verified)
  const user = await User.create({
    username,
    email,
    password,
    verificationToken,
    verificationTokenExpirationDate,
  });

  // send verification email
  sendVerificationEmail({
    username,
    email,
    verificationToken,
    tokenLifetime,
    origin,
  });

  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'Success! Please check your email to verify account.' });
};

const verifyEmail = async (req, res) => {
  const { email, token: verificationToken } = req.query;

  // input validation
  if (!email || !verificationToken) {
    throw new CustomError.BadRequestError('Please provide all values.');
  }

  // check if user exist
  const user = await User.findOne({ email, verificationToken });
  if (!user) {
    throw new CustomError.UnauthenticatedError('Verification Failed');
  }

  // remove account if verification timed out
  const currentTime = new Date();
  const { verificationTokenExpirationDate } = user;
  if (currentTime > verificationTokenExpirationDate) {
    await user.deleteOne({ email, verificationToken });
    throw new CustomError.UnauthenticatedError(
      'Sorry, your email verification timed out. Please register again.'
    );
  }

  // verify account
  user.isVerified = true;
  user.verifiedDate = currentTime;
  user.verificationToken = null;
  user.verificationTokenExpirationDate = null;
  await user.save();

  res.redirect(StatusCodes.MOVED_PERMANENTLY, 'http://localhost:5173/');
};

const login = async (req, res) => {
  const { identifier, password } = req.body;

  // input validation
  if (!identifier || !password) {
    throw new CustomError.BadRequestError('Please provide your credentials.');
  }

  // check if user exists
  const identifierKey = validator.isEmail(identifier) ? 'email' : 'username';
  const user = await User.findOne({ [identifierKey]: identifier });
  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid credentials');
  }

  // check if password is correct
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid credentials');
  }

  // check if user already verified the account
  if (!user.isVerified) {
    throw new CustomError.UnauthenticatedError(
      'Please check your email to verify the account.'
    );
  }

  // send back token through cookies
  const { _id: id, username, role } = user;
  const userPayload = { id, username, role };
  const token = createJWT(userPayload);
  const oneDay = 1000 * 60 * 60 * 24;
  attachCookieToResponse({
    res,
    name: 'token',
    value: token,
    lifetime: Date.now() + oneDay,
  });

  res.status(StatusCodes.OK).json({ msg: 'User logged in.' });
};

const logout = async (req, res) => {
  attachCookieToResponse({
    res,
    name: 'token',
    value: 'logged out',
    lifetime: Date.now(),
  });

  res.status(StatusCodes.OK).json({ msg: 'User logged out.' });
};

module.exports = { register, verifyEmail, login, logout };
