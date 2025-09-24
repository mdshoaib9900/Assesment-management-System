import { useState, useEffect } from "react";
import { generateReport } from "../api/reportApi";

export default function Dashboard() {
  const [sessionId, setSessionId] = useState("");
  const [message, setMessage] = useState("");
  const [reports, setReports] = useState([]);

  // Load saved reports from localStorage
  useEffect(() => {
    const storedReports = localStorage.getItem("reports");
    if (storedReports) {
      setReports(JSON.parse(storedReports));
    }
  }, []);

  // Save reports to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("reports", JSON.stringify(reports));
  }, [reports]);

  const handleGenerate = async () => {
    if (!sessionId) {
      setMessage("Please enter a Session ID");
      return;
    }

    try {
      // Call backend to generate PDF
      await generateReport(sessionId); // POST /report/generate

      const pdfUrl = `http://localhost:5000/api/pdf/report/${sessionId}`;

      const newReport = {
        sessionId,
        url: pdfUrl,
        date: new Date().toLocaleString(),
      };

      // Add to reports list
      setReports((prev) => [newReport, ...prev]);

      setMessage("Report generated successfully!");
      setSessionId(""); // clear input
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.error || "Error generating report");
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Generate Reports</h1>

      {/* Generate Report Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter Session ID"
          className="border p-2 rounded flex-1"
          value={sessionId}
          onChange={(e) => setSessionId(e.target.value)}
        />
        <button
          onClick={handleGenerate}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Generate
        </button>
      </div>

      {message && <p className="mb-6 text-sm text-gray-700">{message}</p>}

      {/* Generated Reports List */}
      {reports.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Generated Reports
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reports.map((report) => (
              <div
                key={report.sessionId}
                className="bg-white p-4 rounded shadow hover:shadow-lg transition"
              >
                <p className="font-medium mb-2">
                  <span className="text-gray-600">Session ID:</span>{" "}
                  {report.sessionId}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Generated: {report.date}
                </p>
                <div className="flex gap-2">
                  <a
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600 transition"
                  >
                    View
                  </a>
                  <a
                    href={report.url}
                    download={`report-${report.sessionId}.pdf`}
                    className="flex-1 bg-gray-300 text-gray-800 text-center py-2 rounded hover:bg-gray-400 transition"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
