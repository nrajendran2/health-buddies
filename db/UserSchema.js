const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { MedicalConditionSchema } = require('./MedicalCondition')


const UserSchema = new Schema({
    name: String,
    username: String,
    age: Number,
    profilepic: String,
    medicalCondition: [MedicalConditionSchema]


})

//MODEL

const User = mongoose.model("User", UserSchema)

module.exports = {
    User,
    UserSchema
}