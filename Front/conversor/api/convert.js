// Front/conversor/api/convert.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { url, format } = req.body;

  if (!url || !format) {
    return res.status(400).json({ error: 'URL e formato são obrigatórios!' });
  }

  const videoId = extractVideoId(url);

  if (!videoId) {
    return res.status(400).json({ error: 'URL inválida!' });
  }

  const apiKey = process.env.API_KEY;
  const apiHost = process.env.API_HOST;

  const options = {
    method: 'GET',
    url: `https://${apiHost}/dl`,
    params: { id: videoId },
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': apiHost,
    },
  };

  try {
    const response = await axios.request(options);
    const downloadUrl = response.data.link;

    if (downloadUrl) {
      res.status(200).json({ download_url: downloadUrl }); // Use 200 para sucesso
    } else {
      res.status(500).json({ error: 'Erro ao obter o link de download.' });
    }
  } catch (error) {
    console.error('Erro na API:', error);
    res.status(500).json({ error: 'Erro ao processar a conversão. Tente novamente.' });
  }
}

function extractVideoId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.|m\.|kids\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|watch\?v=|v\/))([a-zA-Z0-9_-]{11})/i;
  const match = url.match(regex);
  return match ? match[1] : null;
}

// teste