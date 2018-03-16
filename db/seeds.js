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

const TKA = new Treatment ({
    name: "Total Knee Atheroplasty",
    doctor: "Dr. Kim",
    image: "http://www.drugsclaim.com/blog/wp-content/uploads/2016/08/total-knee-replacement-surgery-methods.jpg",
    medications: "morphine, hydromorphine, hydrocodone",
    naturalRemedies: "Hamstring stretches, Physical Therapy, light-walking",
    otherComments: "Knee replacements can be very scary. Usually you are worried if you will ever be able to live the life you did before. The simple answer to this is YES. With the right care from Dr.Kim and PT from Resurgens, I truly believe that my knee is better than ever."

})

const defibrilation = new Treatment ({
    name: "Defirbrilation & Oxygen Therapy",
    doctor: "Dr. Patel",
    image: "http://www.washingtonhra.com/wp-content/uploads/Figure-4-ICD-image2.jpg",
    medications: "Blood Thinners, Beta-Blockers, ACE",
    naturalRemedies:"Light Walking, Swimming/Floating, LOTS OF REST",
    otherComments: "It was the most scary moment of my life, but with the help of my doctors and sons everything is okay now and I'm improving"
    
})


const masectomy = new Treatment ({
    name: "masectomy",
    doctor: "Dr. McQuail",
    image: "http://1.bp.blogspot.com/-HKbJTltmG5Y/U_UCecMjPaI/AAAAAAAAD3E/xrtsF8emO1Y/s1600/mastectomy_modified_radical.jpg",
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

const myocardialinfarction =  new MedicalCondition ({
    name: "Myocardial Infarction",
    description:" Myocardial infarction (MI) (ie, heart attack) is the irreversible death (necrosis) of heart muscle secondary to prolonged lack of oxygen supply (ischemia).",
    symptoms: "Chest Pains, lack of oxygen to the heart, naseous" ,
    dateStarted: "08/05/16",
    treatment: [defibrilation ]
})

const severekneedamange =  new MedicalCondition ({
    name: "Osteoarthiritis",
    description:"The joint within the knee has become inflammed by the patella and femur producing friction. The joint fluid has run out through wear and tear. Now there is bone on bone contact causing inflammation which is painful ",
    symptoms: "Severe Knee Pain, Inflammation, Swelling",
    dateStarted: "10/23/14",
    treatment: [TKA]
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


const raj = new User ({
    name: "Raj Rajendran",
    username: "Pxraje2000",
    age: 59,
    profilepic:"https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/169753_101122193296845_6984667_o.jpg?oh=01a875614701da2fca00f059c6607dc5&oe=5B484F40",
    medicalCondition:[severekneedamange, myocardialinfarction]
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
    return User.insertMany([sophia, raj])
}).then(()=> {
    console.log("saved users")
    db.close()
}).catch((err)=> {
    console.log(err)
})
