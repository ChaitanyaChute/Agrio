const mongoose = require('mongoose');

const DiseaseSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    crop: { type: String, required: true },
    disease_name: { type: String, required: true },
    nature: { type: String, required: true },       
    severity_default: { type: String, required: true }, 
    chemical_cure: [String],                        
    organic_cure: [String],                         
    description: { type: String, default: "Description not available" }, 
    symptoms: [String],
    cause: String
});

module.exports = mongoose.model('Disease', DiseaseSchema);