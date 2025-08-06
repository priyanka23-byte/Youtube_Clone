import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./Routes/user.js"; // add .js extension

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => {
    console.error("MongoDB Connection Failed:", err.message);
    process.exit(1);
  });

// Middleware
app.use('/auth', authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Project is running on port ${PORT}`);
});

