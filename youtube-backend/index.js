import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./Routes/user.js"; 
import VideoRoutes from "./Routes/video.js";
import CommentRoutes from "./Routes/comment.js";
import cookieParser from 'cookie-parser';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => {
    console.error("MongoDB Connection Failed:", err.message);
    process.exit(1);
  });

// Middleware
app.use('/auth', authRoutes);
app.use('/api',VideoRoutes);
app.use('/commentApi',CommentRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Project is running on port ${PORT}`);
});

