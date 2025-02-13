import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const router = express.Router();

// Weather API Route
router.get("/", async (req, res) => {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        return res.status(400).json({ error: "Latitude and longitude are required" });
    }

    try {
        const apiKey = process.env.WEATHER_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: "Weather API key is missing" });
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        const { data } = await axios.get(url);

        res.json({
            temperature: data.main.temp,
            humidity: data.main.humidity,
            rainfall: data.rain ? data.rain["1h"] || 0 : 0,
            condition: data.weather[0]?.description || "No data",
            windSpeed: data.wind?.speed || 0,
        });

    } catch (error) {
        console.error("Weather API Error:", error.message);
        res.status(500).json({ error: "Failed to fetch weather data", details: error.message });
    }
});

export default router;
