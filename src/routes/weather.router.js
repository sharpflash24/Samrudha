import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const router = express.Router();

// Weather API Route
router.get('/api/weather', async (req, res) => {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        return res.status(400).json({ error: "Latitude and longitude are required" });
    }

    try {
        const apiKey = process.env.WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);
        const weatherData = response.data;

        res.json({
            temperature: weatherData.main.temp,
            humidity: weatherData.main.humidity,
            rainfall: weatherData.rain ? weatherData.rain["1h"] || 0 : 0
        });

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

export default router;
