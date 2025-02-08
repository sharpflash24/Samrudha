import CropRecommendation from "../models/cropRecommendation.model.js"
import axios from "axios"

export const recommentCrop = async (req , res) => {
    try{
        const { soilType, pH, nitrogen, phosphorus, potassium, organicCarbon, temperature, humidity } = req.body;
        
        //*Uncomment this code to send the data to fast api ML model uncomment the below code

        const response = await axios.post("/here will come the api of ML model/", {
            pH,
            nitrogen,
            phosphorus,
            potassium,
            organic_carbon: organicCarbon
        });

        if(!response.data || response.data.error ){
            return res.status(500).json({ error: "Failed to get recommendation from the ML model" });
        }

        const recommendedCrops = response.data.recommend_crop;

        const cropData = new CropRecommendation ({
            userId: req.user.id,
            soilType,
            temperature,
            humidity,
            pH,
            nitrogen,
            phosphorus,
            potassium,
            organicCarbon,
            recommendedCrops

        });

        await cropData.save();
        res.status(201).json({ message: "Crop Recommendation Saved : ", cropData });
    }
    catch (error ){
        return res.status(500).json({ error: error.message });
    }
};