import express from "express";
import { signInUser, signUpUser, getUser } from "../controllers/userController.js";

const router = express.Router();

router.post('/signin', signInUser);
router.post('/signup', signUpUser);
router.post('/getUser', getUser);

export default router;