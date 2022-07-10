"use strict";

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const hpp = require("hpp");
const toobusy_js = require("toobusy-js");
const { default: scrawny } = require("scrawny");
const app = express();

//APP MIDDLE-WARES
// Middleware
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(hpp());
app.disable("x-powered-by");
app.use(
  scrawny({
    log: true,
  })
);

//APP ROUTES - IMPORT
const routes = require("./routes");

// TOOBUSY
app.use((req, res, next) => {
  if (toobusy_js()) {
    return res.status(429).send("Too busy!");
  }
  next();
});

// Custom routes
app.use("/test", routes);

//  DEFAULT RESPONSE TO TEST API
app.get("*", (req, res) => {
  res.status(200).send("Hello, world!");
});
module.exports = app;
