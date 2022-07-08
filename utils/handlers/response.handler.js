/**
 * @description Response handler
 * @param {object} res
 * @param {string} message
 * @param {object} data
 * @param {number} statusCode
 * @returns {object}
 */

class CustomResponse {
  constructor(res, error) {
    this.res = res;
    this.exception = error || new Error();
  }

  // Send success response with status code and data
  success(message = "", data = {}, statusCode = 200, meta = {}) {
    return this.res.status(statusCode || 200).json({
      success: true,
      status: statusCode || 200,
      message,
      data,
      meta,
    });
  }

  // Send error response with status code and error message
  error(message = "", data = {}, statusCode = 500, meta = {}) {
    return this.res.status(statusCode || 500).json({
      success: false,
      status:
        this?.exception?.name.toLowerCase() === "customerror"
          ? statusCode || 500
          : 500,
      message:
        this?.exception?.name.toLowerCase() === "customerror"
          ? message
          : "Server error",
      data,
      meta,
    });
  }
}

module.exports = CustomResponse;
