let express = require('express')
let router = express.Router()
let models = require('../models/models')
let fs = require("fs")

router.post('/modechanger', (req, res)=>{
    console.log("body", req.body)
    models.changemode(req.body,
        (err, results)=>{
        if(err){
            res.send(err)
        } else {
            res.send(results)
        }
    })
})

module.exports = router