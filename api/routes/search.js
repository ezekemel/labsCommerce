const express = require("express")
let router = express.Router();

router.route('/')
    .get((req,res)=>{
        res.send('Hello Search!')
    })

module.exports = router; 