const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userScema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        cpassword: {
            type: String,
            required: true
        }
    }
);
userScema.method.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id }, "mynameismanojkedarfromakolaandyou");
        console.log(token);
    }
    catch (err) {

    }
}

userScema.pre('save', async function (next) {

    console.log(`current password is ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
    this.cpassword = undefined;
    next();
})



const User = new mongoose.model('User', userScema);
module.exports = User;