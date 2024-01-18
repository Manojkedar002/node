const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3

    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id is aready present"],
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error("invalid email")
        }
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
});
//we will create new collection
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;