import mongoose, { Schema } from "mongoose";

const fertilizerRecommendationSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        cropName: {
            type: String,
            required: true,
        },
        soilType: {
            type: String,
            required: true,
        },
        moisture: {
            type: Number,
            required: true,
        },
        temperature: {
            type: Number,
            required: true,
        },
        pH: {
            type: Number,
            required: true,
        },
        rainfall: {
            type: Number,
            required: true,
        },
        nitrogen: {
            type: Number,
            required: true,
        },
        phosphorous: {
            type: Number,
            required: true,
        },
        potassium: {
            type: Number,
            required: true,
        },
        organicCarbon: {
            type: Number,
            required: true,
        },
        fertilizerRecommended: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const FertilizerRecommendation = mongoose.model("FertilizerRecommendation", fertilizerRecommendationSchema);