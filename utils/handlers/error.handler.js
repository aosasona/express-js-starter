/**
 * @description Custom Error Class
 * @param {string} message
 * @param {number} statusCode
 */

class CustomError extends Error {
  constructor(statusCode = 500, message = "") {
    super(message);
    this.name = "CustomError";
    this.status = statusCode || 500;
    this.message = message;
    this.stack = new Error().stack;
    this.date = new Date();
  }
}

module.exports = CustomError;
