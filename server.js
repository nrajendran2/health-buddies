require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const UserController = require ('./Controllers/userController')
const MedicalConditionController = require('./Controllers/medicalConditionController')
const TreatmentController = require('./Controllers/treatmentController')


//connect to mongoose
mongoose.connect(process.env.MONGODB_URI)

const app = express();





//Logging if Database if is running or if there is an error

const connection = mongoose.connection
connection.on('connected', () => {
    console.log("Mongoose is rocking and rolling")
})
connection.on('error', (Error )=> {
    console.log("Mongoose Error:", error)
})

//MIDDLEWARE
app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/api/users', UserController)
app.use('/api/users/:userid/medicalcondition', MedicalConditionController )
app.use('/api/users/:userid/medicalcondition/:id/treatment', TreatmentController )



//routes

app.use(express.static(`${__dirname}/client/build`))
// app.get('/', (req, res) => {
//     res.send("Hell World")
// })


app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
  })



const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
    console.log('App is listening on port '  +  PORT)
})