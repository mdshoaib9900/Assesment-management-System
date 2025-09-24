import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// attach JWT
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const generateReport = (sessionId) =>
  API.post("/report/generate", { session_id: sessionId });
