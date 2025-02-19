const CustomError = require('../errors');
const Token = require('../models/Token');
const {
  isTokenValid,
  attachCookieToResponse,
  createJWT,
} = require('../utilities/jwt');

// User authenticates to access the resource.
const authenticateUser = async (req, res, next) => {
  const { accessToken, refreshToken } = req.signedCookies;

  try {
    // Access token is invalid.
    if (!accessToken) {
      if (!refreshToken) {
        throw new CustomError.UnauthenticatedError(
          'Authentication is invalid.'
        );
      }

      // check if refresh token is the one we sent back to client
      const payload = isTokenValid(refreshToken);
      const refreshTokenDB = await Token.findOne({
        user: payload.user.userID,
        refreshToken: payload.refreshToken,
      });
      if (!refreshTokenDB || !refreshTokenDB.isValid) {
        throw new CustomError.UnauthenticatedError(
          'Authentication is invalid.'
        );
      }

      const accessTokenJWT = createJWT({ user: payload.user });
      attachCookieToResponse({
        res,
        accessTokenJWT: accessTokenJWT,
        refreshTokenJWT: refreshToken,
      });
      req.user = payload.user;
      return next();
    }

    // Access token is valid.
    // check if access token is the one we sent back to client
    const payload = isTokenValid(accessToken);
    req.user = payload.user;
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication is invalid.');
  }
};

module.exports = { authenticateUser };
