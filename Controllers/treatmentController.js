const express = require('express')
const router = express.Router({mergeParams: true})
const { Treatment} = require('../db/Treatment.js')



router.get('/', (req,res) => {
    treatment.find().then((treatment )=> {
        res.send(treatment)
    }).catch((error)=> {
        console.log(error)
    })

})


module.exports = router