import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./Routes/user.js"; 
import VideoRoutes from "./Routes/video.js";
import CommentRoutes from "./Routes/comment.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();//to load environment variable from .env file

const app = express();
// Enable CORS to accept requests from frontend at localhost:5173 with credentials 
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}))

const PORT = process.env.PORT || 4000;
// Middleware to parse JSON 
app.use(express.json());
// Middleware to parse cookies 
app.use(cookieParser());

// Connect to MongoDB using the URI from .env file
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => {
    console.error("MongoDB Connection Failed:", err.message);
    process.exit(1);//exit if DB connection failes
  });

// all routes for authentiction,videos,comments
app.use('/auth', authRoutes);
app.use('/api',VideoRoutes);
app.use('/commentApi',CommentRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Project is running on port ${PORT}`);
});

