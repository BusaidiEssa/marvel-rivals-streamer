const express = require('express');
const Hero = require('../models/Hero');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const heroes = await Hero.find({});
    console.log('Fetched heroes count:', heroes.length);
    res.json(heroes);
  } catch (err) {
    console.error('Error fetching heroes from DB:', err);
    res.status(500).json({ error: 'Failed to fetch heroes from DB' });
  }
});

module.exports = router;
