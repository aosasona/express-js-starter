const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
require("./config/db").connect();

const app = express();

//MIDDLEWARE CONFIGURATION
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

//DEFAULT ROUTES
app.use("/", (req, res) => {
  res.send("Hello world!");
});

//IMPORT CUSTOM ROUTES
const dummyRoutes = require("./routes/dummy.routes");

//USE CUSTOM ROUTES
app.use("/", dummyRoutes);

const PORT = process.env.PORT || 8000;

//CONNECT TO SERVER
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
