const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  id: Number,
  name: String,
  role: String,
  imageUrl: String,
});

module.exports = mongoose.model('Hero', heroSchema);
