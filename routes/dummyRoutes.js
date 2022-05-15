const express = require("express");
const router = express.Router();
const { dummyController } = require("../controllers/dummyController");

router.get("/dummy", dummyController);

module.exports = router;
