const express = require('express')
const app = express()
const port = 8080
const search = require('./routes/search')
var request = require('request')

app.use("/search", search);
//use search.js file to handle endpoints 
//that start with /search

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})