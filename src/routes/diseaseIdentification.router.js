import express from "express";
import { identifyDisease } from "../controllers/diseaseIdentification.controller.js";
import { upload } from "../middlewares/multer.middleware.js"; 
import { verifyJWT } from "../middlewares/auth.middleware.js"; // ✅ Corrected import

const router = express.Router();

// Protected route for disease identification
router.post("/", verifyJWT, upload.single("image"), identifyDisease);

export default router;
