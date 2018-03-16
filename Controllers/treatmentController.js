const express = require('express')
const router = express.Router({ mergeParams: true })
const { Treatment } = require('../db/Treatment.js')
const { User } = require('../db/UserSchema')   // model      
const { MedicalCondition } = require('../db/MedicalCondition')// model

router.get('/', (req, res) => {
    userId = req.params.userid
    medicalId = req.params.id

    User.findById(userId)
        .then((user) => {
            const medicalCondition = user.medicalCondition.id(medicalId)
            const treatment = medicalCondition.treatment

            res.json(treatment)
        }).catch((error) => {
            console.log(error)
        })

})
router.post('/', (req, res) => {
    const userId = req.params.userid
    console.log(userId)
    User.findById(userId).then((user) => {
        console.log(user)

        const newMedicalCondition = new MedicalCondition({
            name: req.body.name,
            symptoms: req.body.symptoms,
            dateStarted: req.body.dateStarted
        })

        user.medicalCondition.push(newMedicalCondition)

        // Save User
        return user.save()
    }).then((updatedUser) => {

        //redirect to medical conditions 
        res.redirect(`/api/users/${userId}/medicalcondition`)

    })
})




module.exports = router


