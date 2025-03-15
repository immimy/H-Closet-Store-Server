const { StatusCodes } = require('http-status-codes');
const validator = require('validator');
const User = require('../models/User');
const Token = require('../models/Token');
const CustomError = require('../errors');
const {
  sendVerificationEmail,
  sendResetPasswordEmail,
} = require('../utilities/sendEmail');
const { formatMillisecondToMinute } = require('../utilities/formatter');
const {
  createJWT,
  attachCookieToResponse,
  createTokenUser,
} = require('../utilities/jwt');
const {
  generateSecureRandomString,
  hashString,
} = require('../utilities/crypto');

const register = async (req, res) => {
  const { username, email, password } = req.body;

  // input validation
  if (!username || !email || !password) {
    throw new CustomError.BadRequestError('Please provide all values.');
  }
  const usernameAlreadyExists = await User.findOne({ username });
  const emailAlreadyExists = await User.findOne({ email });
  if (usernameAlreadyExists) {
    throw new CustomError.BadRequestError('Username already exists.');
  }
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists.');
  }

  // set up variables
  const verificationToken = generateSecureRandomString({ bytes: 40 });
  const halfHour = 1000 * 60 * 30;
  const verificationTokenExpirationDate = new Date(Date.now() + halfHour);
  const tokenLifetime = formatMillisecondToMinute(halfHour);
  const origin = 'http://localhost:5173';

  // create user (pending for verified)
  await User.create({
    username,
    email,
    password,
    verificationToken,
    verificationTokenExpirationDate,
  });

  // send verification email
  await sendVerificationEmail({
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
  const { email, token: verificationToken } = req.body;

  // input validation
  if (!email || !verificationToken) {
    throw new CustomError.BadRequestError('Please provide all values.');
  }

  // check if user exists
  const user = await User.findOne({ email, verificationToken });
  if (!user) {
    throw new CustomError.UnauthenticatedError('Verification Failed');
  }
  // check if verification token is the one we provided
  if (user.verificationToken !== verificationToken) {
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

  res.status(StatusCodes.OK).json({ msg: 'Verification Success!' });
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

  // create a refresh token that persists until client logs out
  let refreshToken = '';
  const refreshTokenDB = await Token.findOne({ user: user._id });
  if (refreshTokenDB) {
    if (!refreshTokenDB.isValid) {
      throw new CustomError.UnauthenticatedError('Invalid credentials');
    }

    refreshToken = refreshTokenDB.refreshToken;
  } else {
    refreshToken = generateSecureRandomString({ bytes: 40 });
    await Token.create({ user: user._id, refreshToken });
  }

  // attach token cookies to response
  const tokenUser = createTokenUser(user);
  const accessTokenJWT = createJWT({ user: tokenUser });
  const refreshTokenJWT = createJWT({ user: tokenUser, refreshToken });
  attachCookieToResponse({ res, accessTokenJWT, refreshTokenJWT });

  res.status(StatusCodes.OK).json({ msg: 'User logged in.' });
};

const logout = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user.userID });
  attachCookieToResponse({
    res,
    accessTokenJWT: 'logged out',
    refreshTokenJWT: 'logged out',
    isExpired: true,
  });
  res.status(StatusCodes.OK).json({ msg: 'User logged out.' });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  // input validation
  if (!email) {
    throw new CustomError.BadRequestError('Please provide valid email.');
  }

  const user = await User.findOne({ email });
  // if user exists
  if (user) {
    // set up variables
    const username = user.username;
    const passwordToken = generateSecureRandomString({ bytes: 70 });
    const tenMinutes = 1000 * 60 * 10;
    const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes);
    const tokenLifetime = formatMillisecondToMinute(tenMinutes);
    const origin = 'http://localhost:5173';

    // send reset password email
    await sendResetPasswordEmail({
      username,
      email,
      passwordToken,
      tokenLifetime,
      origin,
    });

    // save password token to user
    user.passwordToken = hashString(passwordToken);
    user.passwordTokenExpirationDate = passwordTokenExpirationDate;
    await user.save();
  }

  res.status(StatusCodes.OK).json({
    msg: 'Success! Please check your email for reset password link.',
  });
};

const resetPassword = async (req, res) => {
  const { email, password, token: passwordToken } = req.body;

  // input validation
  if (!email || !password || !passwordToken) {
    throw new CustomError.BadRequestError('Please provide all values.');
  }

  // check if user exists and token is valid
  const user = await User.findOne({ email });
  const currentTime = new Date();
  if (
    user &&
    hashString(passwordToken) === user.passwordToken &&
    currentTime < user.passwordTokenExpirationDate
  ) {
    user.password = password;
    user.passwordToken = null;
    user.passwordTokenExpirationDate = null;
    await user.save();
  }

  res.status(StatusCodes.OK).json({ msg: 'Reset Password Success!' });
};

module.exports = {
  register,
  verifyEmail,
  login,
  logout,
  forgotPassword,
  resetPassword,
};
