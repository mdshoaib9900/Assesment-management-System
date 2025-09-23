const express = require("express");
const router = express.Router();
const controller = require("../controllers/report.controller");
const authMiddleware = require("../middleware/auth");

router.post("/generate", authMiddleware, controller.generateReport);

module.exports = router;
