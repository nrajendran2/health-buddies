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


module.exports = router 