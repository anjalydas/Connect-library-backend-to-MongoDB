const mongoose = require('mongoose');
const authorsSchema = new mongoose.Schema({
        images: [String],
        title: String,
        authorName: String,
        rating: Number,
        price: Number,
        description: String
  });
  const Author = mongoose.model('Author', authorsSchema);
  module.exports = Author