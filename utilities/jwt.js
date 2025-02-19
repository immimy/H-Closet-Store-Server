const jwt = require('jsonwebtoken');

const createTokenUser = (user) => {
  return {
    userID: user._id,
    username: user.username,
    role: user.role,
  };
};

const createJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

const isTokenValid = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const attachCookieToResponse = ({
  res,
  accessTokenJWT,
  refreshTokenJWT,
  isExpired,
}) => {
  const oneDay = 1000 * 60 * 60 * 24;
  const oneWeek = 1000 * 60 * 60 * 24 * 7;

  const accessTokenLifetime = isExpired ? 0 : oneDay;
  const refreshTokenLifetime = isExpired ? 0 : oneWeek;

  // Access token - 1 Day
  res.cookie('accessToken', accessTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    expires: new Date(Date.now() + accessTokenLifetime),
  });
  // Refresh token - 1 Week
  res.cookie('refreshToken', refreshTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    expires: new Date(Date.now() + refreshTokenLifetime),
  });
};

module.exports = {
  createTokenUser,
  createJWT,
  isTokenValid,
  attachCookieToResponse,
};
