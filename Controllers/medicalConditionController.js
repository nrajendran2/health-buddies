const express = require('express')
const router = express.Router({ mergeParams: true })
const { MedicalCondition } = require('../db/MedicalCondition.js')
const { User } = require('../db/UserSchema')

router.get('/', (req, res) => {
    User.findById(req.params.userid).then((user) => {
        res.json(user.medicalCondition)
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


router.get('/:id', (req, res) => {

    // Find company from companyId route param
    
    User.findById(req.params.userid).then((user) => {
  
      // Use the .id method to extract a single soda from company.sodas
      const medicalCondition = user.medicalCondition.id(req.params.id)
  
      // connect it to a soda/show view
      res.send (medicalCondition)
      
    })
  })







module.exports = router







