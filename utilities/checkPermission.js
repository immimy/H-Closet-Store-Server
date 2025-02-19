const CustomError = require('../errors');

const checkPermission = ({ requestUser, resourceUserID }) => {
  if (requestUser.role === 'admin') return;
  if (requestUser.userID === resourceUserID.toString()) return;
  throw new CustomError.UnauthorizedError(
    'Access denied, cannot access this route.'
  );
};

module.exports = { checkPermission };
