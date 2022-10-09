import express from "express";
import { getPosts, createPost, likePost } from '../controllers/postController.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.post('/likePost', likePost);

export default router;