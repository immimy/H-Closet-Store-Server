const CustomErrorAPI = require('./customErrorAPI');
const BadRequestError = require('./BadRequest');
const UnauthenticatedError = require('./Unauthenticated');
const UnauthorizedError = require('./Unauthorized');
const InternalServerError = require('./InternalServerError');

module.exports = {
  CustomErrorAPI,
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
  InternalServerError,
};
