import express from 'express';
import { getAllVideo, uploadVideo } from '../Controllers/video.controller.js';
import auth from '../Middleware/authentication.js';


const router = express.Router();

router.post('/video',auth,uploadVideo);
router.get('/allvideo',getAllVideo);










export default router;