import mongoose, { Schema } from "mongoose"

const yieldPredictionSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        cropType: {
            type: String,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        },
        moisture: {
            type: Number,
            required: true
        },
        temperature: {
            type: Number,
            required: true,
        },
        rainfall: {
            type: Number,
            required: true
        }
    }, 
    {
    timestamps: true
    }
)

export const YieldPrediction = mongoose.model("YieldPrediction", yieldPredictionSchema)