const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rota de exemplo para buscar dados esportivos
app.get('/api/sports-data', async (req, res) => {
    try {
        const response = await axios.get('https://api-football.com/v3/matches', {
            headers: { 'x-apisports-key': process.env.API_FOOTBALL_KEY }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});