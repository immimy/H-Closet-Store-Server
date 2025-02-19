const CustomErrorAPI = require('./customErrorAPI');
const NotFoundError = require('./NotFound');
const BadRequestError = require('./BadRequest');
const UnauthenticatedError = require('./Unauthenticated');
const UnauthorizedError = require('./Unauthorized');
const InternalServerError = require('./InternalServerError');

module.exports = {
  CustomErrorAPI,
  NotFoundError,
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
  InternalServerError,
};
