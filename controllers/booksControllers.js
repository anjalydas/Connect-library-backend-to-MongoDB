const Book = require("../model/booksModel");

const getAllBooks = async (req, res) => {
  const Books = await Book.find({});
  res.json(Books)
  }
  const getBookById = (req, res) => {
    res.send('not written')
  }
  const addNewBook = (req, res) => {
    res.send('Not written')
  }
  const updateBook =  (req, res) => {
    res.send('Not written')
  }
  const deleteBook = (req, res) => {
    res.send('Not written')
  }
  module.exports = {
    getAllBooks, getBookById, addNewBook, updateBook, deleteBook
  }