const Author = require("../model/authorModel");

const getAllAuthors = async (req, res) => {
  const Authors = await Author.find({});
    res.json(Authors)
  }
  const getAAuthorById = (req, res) => {
    
    res.send('Not written')
  }
  const addNewAuthor = (req, res) => {
    res.send('Not written')
  }
  const updateAuthor = (req, res) => {
    res.send('Not written')
  }
  const deleteAuthor = (req, res) => {
    res.send('Not written')
  }
  module.exports = {
    getAllAuthors, getAAuthorById, addNewAuthor, updateAuthor, deleteAuthor
  }