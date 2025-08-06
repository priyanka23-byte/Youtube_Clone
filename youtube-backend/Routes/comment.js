import express from 'express';
import { addComment, getCommentByVideoId } from '../Controllers/comment.controller.js';
import auth from '../Middleware/authentication.js';

const router = express.Router();

router.post('/comment',auth,addComment)
router.get('/comment/:videoId',getCommentByVideoId)






export default router;