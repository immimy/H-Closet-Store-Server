const jwt = require('jsonwebtoken');

const createJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

const isTokenValid = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const attachCookieToResponse = ({ res, name, value, lifetime }) => {
  res.cookie(name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    expires: new Date(lifetime),
  });
};

module.exports = { createJWT, isTokenValid, attachCookieToResponse };
