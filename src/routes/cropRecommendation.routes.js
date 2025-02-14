import express from "express";
import { recommendCrop } from "../controllers/cropRecommendation.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js"; 
const router = express.Router();

// Protected route for crop recommendation
router.post("/recommend", verifyJWT, recommendCrop);

export default router;
