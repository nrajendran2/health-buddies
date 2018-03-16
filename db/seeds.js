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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7g-RlT5q9ZLHw5A3rxc19-zoj7pdc_f7v55WspOfeTDMEo26Umg",
    medications: "Ibprofuen, Hydrochloride",
    naturalRemedies:"Exercise, Drawing, Painting with my Daughters",
    otherComments: "At first I was really scared of losing one of my breast, but Dr. McQuail walked me thorugh a plan and after 3 months it's been going well."
    
})

const rest = new Treatment ({
name:"Hydration & Rest",
doctor: "Dr. Nwiloh",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7g-RlT5q9ZLHw5A3rxc19-zoj7pdc_f7v55WspOfeTDMEo26Umg",
medications: "Ibprofuen",
naturalRemedies:"Replinishing fluids, Throat Lozenge, Activity Restriction, and Bed Rest",
otherComments: "It is awfuli in the beginning, you will be in so much pain. However, after listening to Dr.Nwiloh, I am feeling much better"
})


const breastcancer =  new MedicalCondition ({
    name: "Breast Cancer",
    description: "Just a bit of a hard place near the mammary gland",
    symptoms: "Lump in chest, pain in chest",
    dateStarted: "3/04/18",
    treatment: [masectomy]
})

const mono =  new MedicalCondition ({
    name: "Mononucleosis",
    description: "(mono) is often called the kissing disease. The virus that causes mono is transmitted through saliva, so you can get it through kissing, but you can also be exposed through a cough or sneeze, or by sharing a glass or food utensils with someone who has mono.",
    symptoms: "Feeling lethargic, loss of appetitie, loss of weight",
    dateStarted: "3/04/18",
    treatment: [rest]

})



const sophia = new User ({
    name: "Sophia Guilliod",
    username:"SophiaGuilliod24",
    age: 50,
    profilepic: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/18620089_10154662006878435_2994886996107442469_n.jpg?oh=204ec350fe2b392d1fc5d726f355eb05&oe=5B49998C",
    medicalCondition: [breastcancer, mono]
    
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
