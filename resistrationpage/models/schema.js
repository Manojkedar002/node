const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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

});
userSchema.pre('save', async function (next) {

    console.log(`current password is ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
    this.cpassword = undefined;
    next();
})
const User = new mongoose.model('User', userSchema);
module.exports = User;