require('dotenv').config
const mongoose = require('mnogoose')
const {User} = require('/UserSchema')


const sophia = new User ({
    name: "Sophia Guilliod",
    username:"SophiaGuilliod24",
    age: 50,
    //medicalCondition: []
    
})