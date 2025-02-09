import mongoose, { Schema } from "mongoose"

const diseaseIdentificationSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        cropName: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        diagnosedDisease: {
            type: String,
            required: true
        },
        confidence: {
            type: Number,
            required: true
        },
        cure: {
            type: String,
            required: true
        }
    }, 

    {
        timestamps: true
    }
)
export const DiseaseIdentification = mongoose.model("DiseaseIdentification", diseaseIdentificationSchema)