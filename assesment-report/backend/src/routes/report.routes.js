const express = require("express");
const router = express.Router();
const controller = require("../controllers/report.controller");
const authMiddleware = require("../middleware/auth");
const path = require("path");
const fs = require("fs");

const reportsDir = path.join(__dirname, "../../reports"); // adjust relative path
if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });

router.post("/generate", authMiddleware, controller.generateReport);

// Serve the generated PDF
router.get("/report/:sessionId", (req, res) => {
  const { sessionId } = req.params;
  const filePath = path.join(reportsDir, `${sessionId}.pdf`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("Report not found");
  }

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `inline; filename="report-${sessionId}.pdf"`
  );

  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
});

module.exports = router;
