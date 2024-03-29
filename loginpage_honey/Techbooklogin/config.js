
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/techbook')
    .then(() => {
        console.log('connection done')
    })
    .catch((err) => { console.log(err) });

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
);

const User = new mongoose.model('User', userSchema);
module.exports = User;
