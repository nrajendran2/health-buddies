const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const {TreatmentSchema} = require('./Treatment') // name of schema folder for treatement

const MedicalConditionSchema = new Schema ({
    name: String,
    description: String,
    symptoms: String, 
    dateStarted: String,
    treatment: [TreatmentSchema]

})

// MODEL 
 const MedicalCondition = mongoose.model('MedicalCondition', MedicalConditionSchema)

module.exports = {
    MedicalCondition,
    MedicalConditionSchema
}