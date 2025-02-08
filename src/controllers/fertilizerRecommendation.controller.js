import FertilizerRecommendation from "../models/fertilizerRecommendation.model.js";
import axios from "axios";

export const recommendFertilizer = async (req , res ) => {
    try{
        const { cropName, soilType, moisture, temperature, pH, rainfall, nitrogen, phosphorus, potassium, organicCarbon, remark } = req.body;
        // Send data to fast api ML model 
        const response = await axios.post("//here will come the API of the ML model ", {
            soilType,
            cropName,
            nitrogen,
            phosphorus,
            potassium, 
            organicCarbon,
            pH,
            rainfall,
            temperature,
            moisture
        });

        if ( !response.data || response.data.error ){
            return res.status(500).json({ error: "Failed to get recommendation from ML model" });
        }
        const recommendedFertilizer = response.data.recommended_fertilizer;


        //* The code below is to store the recommendations in MongoDB
        const fertilizerData = new FertilizerRecommendation({
            userId: req.user.id,
            cropName,
            soilType,
            moisture,
            temperature,
            pH,
            nitrogen,
            phosphorus,
            potassium,
            organicCarbon,
            fertilizerRecommended: recommendedFertilizer, 
            remark
            //* quantity: "the quatity we want to give as output"
        });


        await fertilizerData.save();
        res.status(201).json({ message: "Fertilizer Recommendation Saved ", fertilizerData });
    }
    catch ( error ){
        return res.status(500).json({ error: error.message });
    }
};