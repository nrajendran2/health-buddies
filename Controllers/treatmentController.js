const express = require('express')
const router = express.Router({mergeParams: true})
const { Treatment} = require('../db/Treatment.js')
const {User} = require('../db/UserSchema')   // model      
const {MedicalCondition} = require('../db/MedicalCondition')// model

router.get('/', (req,res) => {
    userId = req.params.userid
    medicalId = req.params.id

    console.log(userId)
    console.log(medicalId)


    User.findById(userId)
    .then((user) => {
        const medicalCondition = user.medicalCondition.id(medicalId)
        const treatment = medicalCondition.treatment

        res.json(treatment)
    }).catch((error)=> {
        console.log(error)
    })

})


module.exports = router


