const mongoose = require('mongoose')

const Schema = mongoose.Schema


const UserSchema = new Schema ({
    name: String,
    username: String,
    age: Number,


})

//MODEL

const User = mongoose.model("User", UserSchema)

module.exports = {
    User,
    UserSchema
}