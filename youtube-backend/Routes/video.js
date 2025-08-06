import express from 'express';
import { getAllVideo, uploadVideo,getVideoById, getAllVideoByUserID } from '../Controllers/video.controller.js';
import auth from '../Middleware/authentication.js';


const router = express.Router();

router.post('/video',auth,uploadVideo);
router.get('/allvideo',getAllVideo);
router.get('/getVideoById/:id', getVideoById);
router.get('/:userId/channel',getAllVideoByUserID);




export default router;