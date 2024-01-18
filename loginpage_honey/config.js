

//create connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Login-tut')
    .then(() => { console.log('connection is done'); })
    .catch((err) => { console.log(err) })
// craete Schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
//collection part
const Collection = mongoose.model("Collection", LoginSchema);

module.exports = Collection;