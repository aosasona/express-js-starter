/**
 * @description Response handler
 * @param {object} res
 * @param {string} message
 * @param {object} data
 * @param {number} statusCode
 * @returns {object}
 */

class CustomResponse {
  constructor(res) {
    this.res = res;
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
      status: statusCode || 500,
      message,
      data,
      meta,
    });
  }
}

module.exports = CustomResponse;
