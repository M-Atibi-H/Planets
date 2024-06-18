const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const API_KEY = 'Ot28mMZlv6k4ttzYvKAA0Q==gsjSjZUAsL2qGe3O'; // Replace with your actual API key

app.get('/planets', async (req, res) => {
  const planetName = req.query.name;
  if (!planetName) {
    return res.status(400).send({ error: 'Planet name is required' });
  }

  try {
    const response = await axios.get(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, {
      headers: { 'X-Api-Key': API_KEY }
    });
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while fetching the planet data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
