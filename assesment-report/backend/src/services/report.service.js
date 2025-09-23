const data = require("../data/data");
const { assessments } = require("../config/assesment.config.js");
const { getValueByPath } = require("../utils");
const { generatePdf } = require("./pdf.service");

function buildHtml(record, conf) {
  let html = `<html><body>
  <h1>${conf.displayName || "Assessment Report"}</h1>
  <p>Session: ${record.session_id}</p>`;

  conf.sections.forEach((sec) => {
    html += `<h3>${sec.title}</h3><table border="1" cellpadding="5">`;
    sec.fields.forEach((f) => {
      const val = getValueByPath(record, f.path);
      html += `<tr><td><b>${f.label}</b></td><td>${val || ""}</td></tr>`;
    });
    html += `</table>`;
  });

  html += `</body></html>`;
  return html;
}

async function generateReport(session_id) {
  const record = data.find((d) => d.session_id === session_id);
  if (!record) throw new Error("Session not found");
  const conf = assessments[record.assessment_id];
  if (!conf) throw new Error("No config for assessment_id");

  const html = buildHtml(record, conf);
  const filePath = await generatePdf(html, `${session_id}.pdf`);
  return filePath;
}

module.exports = { generateReport };
