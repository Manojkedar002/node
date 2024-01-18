const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {

    const conn = await mongoose.connect(process.env.MONGO_LOCAL_URL)
        .then(() => { console.log("connection sucess".bgGreen); })
        .catch((err) => { console.log("no connection".bgRed) })
}
module.exports = connectDB;


