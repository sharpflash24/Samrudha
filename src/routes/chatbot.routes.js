import express from "express";
import { chatWithBot } from "../controllers/chatbot.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js"; 

const router = express.Router();

// Protected route for chatbot interaction
router.post("/chat", verifyJWT, chatWithBot);

export default router;
