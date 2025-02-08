import mongoose, { Schema } from "mongoose";

const chatbotSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        response: {
            type: String,
            required: true,
        }, 
    },
    {
        timestamps: true,
    }
)

export const Chatbot = mongoose.model("Chatbot", chatbotSchema);