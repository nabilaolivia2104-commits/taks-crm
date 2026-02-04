const express = require("express");
const router = express.Router();
const controller = require("../controllers/activity.controller");

router.post("/", controller.createActivity);

module.exports = router;
