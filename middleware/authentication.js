const CustomError = require('../errors');
const { isTokenValid } = require('../utilities/jwt');

// User authenticates to access the resource.
const authenticateUser = (req, res, next) => {
  const { token } = req.signedCookies;

  // check if cookies expire
  if (!token) {
    throw new CustomError.UnauthenticatedError('Authentication is invalid.');
  }

  // check if token is the one we sent back to client
  try {
    const payload = isTokenValid(token);
    req.user = payload;
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication is invalid.');
  }
};

module.exports = { authenticateUser };
