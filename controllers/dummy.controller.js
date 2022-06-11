const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const dummyController = asyncHandler(async (req, res) => {
  res.send("Hello");
});

module.exports = { dummyController };
