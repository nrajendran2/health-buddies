require('dotenv').config()
const mongoose = require('mongoose')
const {User} = require('./UserSchema')
const {MedicalCondition} = require('./MedicalCondition')
const {Treatment} = require('./Treatment')

console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

db.once('open', ()=> {
    console.log("Mongoose on Seeds has connected to the database")
})

db.on('error', (error) => {
    console.error(`MongoDB connection error!!! ${error} `)
  process.exit(-1)
})



const masectomy = new Treatment ({
    name: "masectomy",
    doctor: "Dr. McQuail",
    image: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2017/09/29/16/35/bc-3651003-001-0-8col.jpg",
    medications: "Ibprofuen, Hydrochloride",
    naturalRemedies:"Exercise, Drawing, Painting with my Daughters",
    OtherComments: "At first I was really scared of losing one of my breast, but Dr. McQuail walked me thorugh a plan and after 3 months it's been going well."
    
})


const breastcancer =  new MedicalCondition ({
    name: "Breast Cancer",
    symptoms: "Lump in chest, pain in chest",
    dateStarted: "3/04/18",
    treatment: [masectomy]
})


const sophia = new User ({
    name: "Sophia Guilliod",
    username:"SophiaGuilliod24",
    age: 50,
    profilepic: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/18620089_10154662006878435_2994886996107442469_n.jpg?oh=204ec350fe2b392d1fc5d726f355eb05&oe=5B49998C",
    medicalCondition: [breastcancer]
    
})



User.remove()
.then(()=> {
        return User.remove()
}).then(()=> {
    return User.insertMany([sophia])
}).then(()=> {
    console.log("saved users")
    db.close()
}).catch((err)=> {
    console.log(err)
})
