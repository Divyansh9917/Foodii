const express = require("express");
const app = express();
const port = 4000;
const mongoDB = require("./db");
require("dotenv").config();

app.use(express.json());

// CORS setup for frontend (Vite default port 5173)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Connect to MongoDB
mongoDB();

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// Routes
app.use("/api", require("./Routes/Signup"));
app.use("/api", require("./Routes/Login"));
app.use("/api", require("./Routes/Feedback")); // ✅ new feedback route

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
