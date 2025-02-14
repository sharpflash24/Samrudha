import express from "express";
import { recommendFertilizer } from "../controllers/fertilizerRecommendation.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js"; 

const router = express.Router();

// Protected route for fertilizer recommendation
router.post("/recommend", verifyJWT, recommendFertilizer);

export default router;
