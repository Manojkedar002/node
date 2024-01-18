const dotenv=require("dotenv")
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URL)
            console.log('connectiom is successful'.bgGreen)
    }
    catch (err) {
        console.log("connection not done".bgRed)
    }

}
module.exports = connectDB;

