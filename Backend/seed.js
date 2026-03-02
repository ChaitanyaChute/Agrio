require('dotenv').config();
const mongoose = require('mongoose');
const Disease = require('./models/Disease');
const diseaseData = require('./data');


const MONGO_URI = process.env.MONGO_URI;

const seedDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB");
        await Disease.deleteMany({});
        console.log("Old Data Deleted");

       
        await Disease.insertMany(diseaseData);
        console.log("New Data Imported Successfully!");

        process.exit();
    } catch (err) {
        console.error("Error:", err);
        process.exit(1);
    }
};

seedDB();