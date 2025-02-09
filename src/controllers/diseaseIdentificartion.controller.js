import DiseaseIdentification from "../models/diseaseIdentification.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import axios from "axios";
// import { upload } from "../middlewares/multer.middleware.js"


export const identifyDisease = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "Image file is required" });
        }

        // Upload the file to Cloudinary
        const cloudinaryResponse = await uploadOnCloudinary(req.file.path);

        if (!cloudinaryResponse) {
            return res.status(500).json({ error: "Failed to upload image to Cloudinary" });
        }

        // Get data from request
        const mlResponse = await axios.post("// here will the fast API of the ML model to get the repsponse", {
            imageUrl: cloudinaryResponse.secure_url
        })

        if (!mlResponse.data || mlResponse.data.error ){
            return res.status(500).json({ error: "Failed to get disease identification from ML model"})
        }

        const { diagnosedDisease, confidence, cure } = mlResponse.data;


        // Create a new disease record
        const disease = new DiseaseIdentification({
            userId: req.user.id, 
            cropName: req.body.cropName,
            imageUrl: cloudinaryResponse.secure_url, // Cloudinary image URL
            diagnosedDisease,
            confidence,
            cure
        });

        await disease.save();

        return res.status(201).json({ message: "Disease Identified and Saved", disease });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};