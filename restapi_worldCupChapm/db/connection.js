const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/Number-trophy";

const connectDB = () => {
    mongoose.connect(uri, {})
        .then(() => { console.log('connection is done') })
        .catch((err) => { console.log(err) });
}
module.exports = connectDB;