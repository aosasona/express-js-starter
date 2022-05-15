const asyncHandler = require("express-async-handler");

const dummyMiddleware = asyncHandler((req, res, next) => {
  console.log("This is a dummy middleware");
  next();
});

module.exports = dummyMiddleware;
