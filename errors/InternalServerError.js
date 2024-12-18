const { StatusCodes } = require('http-status-codes');
const CustomErrorAPI = require('./customErrorAPI');

class InternalServerError extends CustomErrorAPI {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}

module.exports = InternalServerError;
