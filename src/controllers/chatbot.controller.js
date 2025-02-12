import Chatbot from "../models/chatbot.model.js";
import axios from "axios";

export const chatWithBot = async (req , res) => {
    try {
        const { message } = req.body;

        if(!message){
            return res.status(400).json({ error: "Message is required"});
        }

        if(!req.user || !req.user.id) {
            return res.status(401).json({ error: "Unauthorized: User not found" });
        }

        const response = await axios.post("//Here will the FAST API LINK FOR THE CHATBOT MODEL", { message });

        if(!response.data || response.data.error) {
            return res.status(500).json({ error: "Failed to get Chatbot response" });
        }

        const botResponse = response.data.response;

        const chatData = new Chatbot({
            userId: req.user.id,
            message,
            response: botResponse,
        });

        await chatData.save();

        return res.status(201).json({ message : "Chat response saved", chatData });
    }
    catch (error) {
        return res.status(500).json({ error: error.message});
    }
};