const express = require('express')
const mongoose = require('mongoose');
const booksRoutes = require ('./routes/books')
const authorRoutes = require ('./routes/author')
const app = express()
const port = 3000


app.use('/books', booksRoutes)
app.use('/author', authorRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
main().then(() => console.log('connected')).catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://anjalidas1791:5M6GTevst9cuC3cu@cluster0.9ob9sto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

  
}
