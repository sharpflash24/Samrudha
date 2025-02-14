import express from "express";
import { predictYield } from "../controllers/yieldPrediction.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js"; 

const router = express.Router();

// Protected route for yield prediction
router.post("/predict", verifyJWT, predictYield);

export default router;
