const mongoose = require('mongoose');
const booksSchema = new mongoose.Schema({
    bookName: String,
    image: String
  });
  const Book = mongoose.model('Book', booksSchema);
  module.exports = Book