🎬 YouTube Clone — 
Built with React on the frontend and Node.js + Express + MongoDB on the backend, this app comes loaded with authentication, video uploads, streaming, commenting all sprinkled with Cloudinary magic for hosting your media files. 🚀

✨ Features --
🔐 User Authentication — JWT tokens kept safe in HTTP-only cookies (because security matters, folks)
🎥 Video Uploads — with thumbnails & metadata so every upload looks pro
🏷 Browse by Categories — neatly organized with thumbnails, likes, and channel info
▶ Watch Page — with like/dislike buttons & subscribe options
💬 Comment System — leave your thoughts
👤 User Profiles — all your uploaded videos & channel info in one place
☁ Cloudinary Integration — lightning-fast delivery for images & videos

🛠 Tech Stack
Frontend: React, React Router, Axios, React Icons
Backend: Node.js, Express, MongoDB, Mongoose, JWT
Media Hosting: Cloudinary
Utilities: dotenv, cors, cookie-parser

🚀 Getting Started

1️⃣ Prerequisites

Node.js v16+
MongoDB (Atlas or local)
Cloudinary account
npm 

2️⃣ Clone This Beauty
git clone https://github.com/yourusername/youtube-clone.git
cd youtube-clone

3️⃣ Backend Setup

cd  youtube-backend
npm install
npm start
Server runs on http://localhost:4000 🖥

4️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev
Frontend runs on http://localhost:5173 🌐

🗝 Environment Variables
Create a .env file inside /backend:
MONGO_URI=your_mongodb_connection_string
PORT=4000

📂 Project Structure
/backend
  /controllers     # Logic for videos, comments, auth
  /models          # Mongoose schemas
  /routes          # Express endpoints
  index.js
/frontend
  /components      # Navbar, Sidebar, VideoCard, etc.
  /pages           # Home, Profile, Video, Upload
  App.jsx
  main.jsx
  
🎯 API Sneak Peek
=POST	/auth/signup	Register new user
=POST	/auth/signin	Login user
=POST	/videos/upload	Upload video metadata
=GET	/videos/:id/stream	Stream video
=POST	/videos/:id/comments	Add comment

☁ Cloudinary Tips
Upload videos & thumbnails to Cloudinary
Save returned URLs in MongoDB



🛡 Security & Production Notes
Use httpOnly, secure, and sameSite=None for JWT cookies in production
Always run HTTPS in production 🌍
Validate file type & size before uploads
Keep your secrets… well… secret


💡 Future Upgrades
🔍 Search + Filters + Sorting
🧵 Nested comment replies
📜 Infinite scroll
🔔 Real-time notifications
💄 UI glow-up

Author
👤 Priyanka yadav
priyankay2308@gamil.com


