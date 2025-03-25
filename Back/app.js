const express = require("express");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.static(path.join(__dirname, '../Front/conversor/dist')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../Front/conversor/dist', 'index.html'));
});

app.use(express.json());

// Rota da API de conversão de vídeo
app.post("/api/convert", async (req, res) => {
  const { url, format } = req.body;

  if (!url || !format) {
    return res.status(400).json({ error: "URL e formato são obrigatórios!" });
  }

  const videoId = extractVideoId(url);

  if (!videoId) {
    return res.status(400).json({ error: "URL inválida!" });
  }

  const options = {
    method: 'GET',
    url: `https://${process.env.API_HOST}/dl`,
    params: { id: videoId },
    headers: {
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': process.env.API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    const downloadUrl = response.data.link;

    if (downloadUrl) {
      res.json({ download_url: downloadUrl });
    } else {
      res.status(500).json({ error: "Erro ao obter o link de download." });
    }
  } catch (error) {
    console.error("Erro na API:", error);
    res.status(500).json({ error: "Erro ao processar a conversão. Tente novamente." });
  }
});

function extractVideoId(url) {
  const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=))([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
