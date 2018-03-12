const express = require('express')
const router = express.Router({mergeParams: true})
const { MedicalCondition } = require('../db/MedicalConditonSchema.js')



router.get('/', (req,res) => {
    MedicalCondition.find().then((condition) => {
        res.send(condition)
    }).catch((error)=> {
        console.log(error)
    })

})

module.exports = router 