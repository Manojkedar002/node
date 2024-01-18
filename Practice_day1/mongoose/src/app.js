const mongoose = require("mongoose");

// create connection
mongoose.connect("mongodb://localhost:27017/manoj_database", {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => console.log("connection is succesful"))
    .catch((err) => console.log(err));

//mongoose schema defines the sructures of document
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, lowarcase: true, trim: true },
    marks: Number,
    city: String
});

const Student = new mongoose.model("Student", studentSchema);
const createDocument = async () => {
    try {
        // const student3 = new Student({
        //     name: "Suresh",
        //     marks: 79,
        //     city: "Amravati"
        // });
        // const student5 = new Student({
        //     name: "Pritesh",
        //     marks: 79,
        //     city: "Amravati"
        // });
        const student7 = new Student({
            name: "       Thapa technical      ",
            marks: 95,
            city: "Pune"
        });
        const result = await Student.insertMany([student6]);
        console.log(result);
    }
    catch (err) {
        console.log(err)
    }
}

createDocument();          //   ye jitane bar call hoga  utane bar data  create karega isliye coment out kiya

const getDocument = async () => {
    try {
        const result = await Student.find({ name: "thapa technical" }).select({ name: 1 }).limit(1)
        console.log(result);
    }
    catch (err) {
        console.log(err)
    }
}
getDocument();
