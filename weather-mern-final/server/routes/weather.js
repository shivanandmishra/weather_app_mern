import express from "express";
import axios from "axios";
const router = express.Router();
router.get("/:city", async (req, res) => {
  const { city } = req.params;
  const apiKey = process.env.WEATHER_API_KEY;
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      { params: { q: city, appid: apiKey, units: "metric" } }
    );
    res.json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ message: "Failed to fetch weather data" });
  }
});
export default router;
