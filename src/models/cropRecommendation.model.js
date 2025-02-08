import  mongoose, { Schema }  from "mongoose";

const cropRecommendationSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        soilType: {
            type: String,
            required: true,
        },
        humidity: {
            type: Number,
            required: true,
        },
        pH: {
            type: Number,
            required: true,
        },
        nitrogen: {
            type: Number,
            required: true,
        },
        phosphorus: {
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
        temperature: {
            type: Number,
            required: true,
        },
        rainfall: {
            type: Number,
            required: true,
        },
        cropRecommended: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const CropRecommendation = mongoose.model("CropRecommendation", cropRecommendationSchema);