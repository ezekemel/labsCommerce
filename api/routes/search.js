const express = require("express")
let router = express.Router();
const axios = require('axios').default;


router.route('/')
    .get((req,res)=> {
        const { query } = req.query;
        axios.get("https://api.mercadolibre.com/sites/MLA/search?q=" + query)
        .then(response => {            
            const products = response.data.results.map((e) => {
              return {
                id: e.id,
                title: e.title,
                price: e.price,
                ticker: e.currency_id,               
                condition: e.condition,
                img: e.thumbnail,
                stock: e.available_quantity,
                link: e.permalink
              }
            });
            res.send(products);
          })
          .catch(err => res.send(err));
      });
       
         
          

module.exports = router; 