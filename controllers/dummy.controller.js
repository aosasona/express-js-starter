const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const CustomResponse = require("../utils/handlers/response.handler");
const CustomError = require("../utils/handlers/error.handler");

const dummyController = asyncHandler(async (req, res) => {
  try {
    // return new CustomResponse(res).success(
    //   "Hello, world!",
    //   {
    //     message: "Hello, world!",
    //   },
    //   200,
    //   { type: "test" }
    // );
    throw new CustomError("Testing error", 400);
  } catch (error) {
    return new CustomResponse(res, error).error(
      "Something went wrong man",
      {
        message: error.message,
      },
      error.status,
      { type: "test" }
    );
  }
});

module.exports = { dummyController };
