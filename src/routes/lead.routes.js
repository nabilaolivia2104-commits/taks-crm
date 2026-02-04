const express = require("express");
const router = express.Router();
const controller = require("../controllers/lead.controller");

router.post("/", controller.createLead);
router.get("/", controller.getLeads);

module.exports = router;
