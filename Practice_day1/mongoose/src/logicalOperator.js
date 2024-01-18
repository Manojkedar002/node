const mongoose = require("mongoose");

// create connection
mongoose.connect("mongodb://localhost:27017/manoj_database", {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => console.log("connection is succesful"))
    .catch((err) => console.log(err));

//mongoose schema defines the sructures of document
const studentSchema = new mongoose.Schema({
    name: String,
    marks: Number,
    city: String
});

const Student = new mongoose.model("Student", studentSchema);




const getDocument = async () => {
    try {
        const result = await Student.find({ $or: [{ city: "Amravati" }, { marsk: { $gte: 70 } }] })//.select({ name: 1 }).limit(1)
        //.select({ name: 1 }).limit(1)
        console.log(result);
    }
    catch (err) {
        console.log(err)
    }
}
getDocument();
