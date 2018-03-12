const mongoose = require('mongoose')


const Schema = mongoose.Schema 

const TreatmentSchema = new Schema ({
    symptoms: String,
    dcotor: String,
    image: String,
    mediations: String,
    naturalRemedies: String,
    otherComments: String,

})


//MODEL
const Treatment = mongoose.model("Treatment", TreatmentSchema)

module.exports = {
    Treatment,
    TreatmentSchema
}