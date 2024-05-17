const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api");
const errorMessages = require("../constants/error_messages");

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message || errorMessages.BAD_REQUEST);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
