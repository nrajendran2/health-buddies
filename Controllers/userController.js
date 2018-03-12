const express = require('express')
const router = express.Router({ mergeParams: true })
const { User } = require('../db/UserSchema.js')

router.get('/', (req, res) => {
    User.find().then((users) => {
        res.json(users)
    }).catch((error) => {
        console.log(error)
    })
})



  router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        age: req.body.age,
        profilepic:req.body.profilepic
    })
    newUser.save().then((savedUser) => {
  
        res.send(savedUser)
  
    }).catch((err) => {
        conosle.log(err)
    })
  })
  


module.exports = router 