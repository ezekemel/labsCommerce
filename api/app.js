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

app.get('/getiphone', (req,res)=>{
  request('https://api.mercadolibre.com/sites/MLA/search?q=iphone', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.send(body)
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})