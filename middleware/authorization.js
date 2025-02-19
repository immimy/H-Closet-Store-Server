const CustomError = require('../errors');

const authorizePermission = (...roles) => {
  return async (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        'Access denied, cannot access this route.'
      );
    }
    next();
  };
};

const forbidDemoUser = async (req, res, next) => {
  if (req.body.email === 'demo@example.com') {
    throw new CustomError.UnauthorizedError(
      'Access denied, cannot access this route.'
    );
  }
  next();
};

module.exports = { authorizePermission, forbidDemoUser };
