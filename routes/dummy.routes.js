const express = require("express");
const router = express.Router();
const { dummyController } = require("../controllers/dummy.controller");

router.get("/dummy", dummyController);

module.exports = router;
