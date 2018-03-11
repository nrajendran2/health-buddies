const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const TreatmentSchema = new Schema ({
    symptoms: String,
    dcotor: String,
    image: String,
    mediations: String,
    naturalRemedies: String,

})


//MODEL
const Treatment = mongoose.model("Treatemnt", TreatmentSchena)