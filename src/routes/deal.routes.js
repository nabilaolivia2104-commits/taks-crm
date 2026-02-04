const express = require("express");
const router = express.Router();
const controller = require("../controllers/deal.controller");

router.put("/stage", controller.updateStage);

module.exports = router;
