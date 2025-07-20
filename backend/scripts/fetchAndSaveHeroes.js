require('dotenv').config();
const mongoose = require('mongoose');
const axios = require('axios');
const Hero = require('../models/Hero');

async function fetchAndSaveHeroes() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const response = await axios.get('https://marvelrivalsapi.com/api/v1/heroes', {
      headers: {
        'x-api-key': process.env.MARVEL_API_KEY,
      },
    });

    const heroes = response.data.map(({ id, name, role, imageUrl }) => ({
      id, name, role, imageUrl,
    }));

    await Hero.deleteMany({});
    await Hero.insertMany(heroes);

    console.log('Heroes data saved to DB!');
  } catch (err) {
    console.error('Failed to fetch or save heroes:', err);
  } finally {
    mongoose.connection.close();
  }
}

fetchAndSaveHeroes();
