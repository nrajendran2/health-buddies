const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const MedicalConditionSchema = new Schema ({
    name: String,
    description: String,
    symptoms: String, 
    dateStarted: String,
    treatment: [TreatmentSchema]


})

// MODEL 
const MedicalCondition = mongoose.mode;('MedicalCondition', MedicalConditionSchema)

module.exports = {
    MedicalCondition,
    MedicalConditionSchema
}