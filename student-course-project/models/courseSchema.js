const  mongoose  = require("mongoose");

const courseSchema = mongoose.Schema({
    cid: {
        type: Number,
        required: true,
        unique: true
    },

    cname: {
        type: String,
        required: true
    }
    
});

const Course = new mongoose.model('Course', courseSchema);

module.exports = Course;