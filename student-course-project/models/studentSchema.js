const  mongoose  = require("mongoose");

const studentSchema = new mongoose.Schema({
    sid: { type: Number, required: true, unique:true},
    name: {
        type: String,
        required:true
    },
    courseId:
    {
        type: mongoose.Schema.Types.ObjectId, ref: 'Course'
    }       // Reference to the Course schema
});

const Student = new mongoose.model('Student', studentSchema);
module.exports=Student