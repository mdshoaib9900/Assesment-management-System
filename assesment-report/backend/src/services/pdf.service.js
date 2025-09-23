const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const { reportsDir } = require("../config");

async function generatePdf(html, filename) {
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir);

  const filePath = path.join(reportsDir, filename);
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.pdf({ path: filePath, format: "A4", printBackground: true });
  await browser.close();

  return filePath;
}

module.exports = { generatePdf };
