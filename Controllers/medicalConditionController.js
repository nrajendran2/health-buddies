const express = require('express')
const router = express.Router({mergeParams: true})
const { MedicalCondition } = require('../db/MedicalCondition.js')
const {User} = require('../db/UserSchema')

router.get('/', (req,res) => {
    User.findById(req.params.id).then((user) => {
        res.json(user.medicalCondition)
    }).catch((error)=> {
        console.log(error)
    })

})

module.exports = router 







