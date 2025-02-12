import YieldPrediction from "../models/yieldPrediction.model.js";
import axios from "axios";

export const predictYield = async (req, res) => {
    try{
        const { cropType, latitude, longitude, moisture, temperature, rainfall } = req.body;

        const response = await axios.post("//Here will come the link of actual model of FAST API", {
            cropType,
            latitude,
            longitude,
            moisture,
            temperature,
            rainfall
        });

        if (!response.data || response.data.error) {
            return res.status(500).json({ error: "Failed to get yield prediction from ML model" });
        }

        const predictedYield = response.data.predicted_yield;

        const yieldData = new YieldPrediction({
            userId: req.user.id,
            cropType,
            latitude,
            longitude,
            moisture,
            temperature,
            rainfall,
            predictedYield
        });

        await yieldData.save();
        res.status(201).json({ message: "Yield Prediction Saved" , yieldData });
    }
    catch( error ){
        return res.status(500).json({ error: error.message });
    }
};