const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api");
const errorMessages = require("../constants/error_messages");
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message || errorMessages.NOT_FOUND);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
