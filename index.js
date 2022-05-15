const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db").connect();

const app = express();

//MIDDLEWARE CONFIGURATION
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DEFAULT ROUTES
app.use("/", (req, res) => {
  res.send("Hello world!");
});

//IMPORT CUSTOM ROUTES
const dummyRoutes = require("./routes/dummyRoutes");

//USE CUSTOM ROUTES
app.use("/", dummyRoutes);

const PORT = process.env.PORT || 8000;

//CONNECT TO SERVER
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
