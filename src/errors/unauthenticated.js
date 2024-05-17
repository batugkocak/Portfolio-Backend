const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api");
const errorMessages = require("../constants/error_messages");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message || errorMessages.UNAUTHENTICATED);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
