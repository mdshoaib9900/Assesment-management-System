const { generateReport } = require("../services/report.service");

exports.generateReport = async (req, res) => {
  try {
    const { session_id } = req.body;
    if (!session_id) return res.status(400).json({ error: "session_id required" });

    const filePath = await generateReport(session_id);
    res.json({ success: true, path: filePath });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
