const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/auth.routes"); 
const reportRoutes = require("./src/routes/report.routes"); 
const pdfRoutes = require("./src/routes/report.routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Mount auth routes
app.use("/api/auth", authRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/pdf", pdfRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
