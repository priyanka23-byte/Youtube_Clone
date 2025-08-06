const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => {
    console.error("MongoDB Connection Failed:", err.message);
    process.exit(1); // Stop app if DB fails
  });

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send({ message: "hii This is my youtube clone project" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Project is running on port ${PORT}`);
});
