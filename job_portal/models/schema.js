const mongoose = require("mongoose");
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"name is required"]
        },
        lastname: {
            type: String,
             
        },
        email: {
            type: String,
            required: [true, "email is required"],
            unique: true,
            validate:validator.isEmail
        },
        password: {
            type: String,
            required: [true,"password is required"]
        },
        location: {
            type: String
        }
    }, { timestamps:true }
)
userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
});
userSchema.methods.createJWT = function () {
    return jwt.sign({ userid: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
    
}

//compare password
userSchema.methods.comparePassword =async function (userPassword) {
    const ismatch = await bcrypt.compare(userPassword, this.password);
    return ismatch
}

const User = mongoose.model('User', userSchema)

module.exports = User