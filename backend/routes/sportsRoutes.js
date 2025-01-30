const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.get("/sports", async (req, res) => {
  try {
    const response = await axios.get("https://api-football.com/v3/matches", {
      headers: { "x-apisports-key": process.env.API_FOOTBALL_KEY },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Erro ao buscar dados esportivos:", error.message);
    res.status(500).json({ error: "Erro ao buscar dados esportivos" });
  }
});

module.exports = router;
