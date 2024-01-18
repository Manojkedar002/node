const express = require('express');
const app = express();

const router = require('./route/routers');
const { Student, Course } = require('./models/model');


require('./db/dbconnection');
//app.get('/', routes)
app.use("/", router);

app.listen(3000, () => {
    console.log('server is onx')
})



var dbcourse = [];

// Finding courses of category Database 
Course.find({ category: "Database" })
    .then(data => {
        console.log("Database Courses:")
        console.log(data);

        // Putting all course id's in dbcourse array 
        data.map((d, k) => {
            dbcourse.push(d._id);
        })

        // Getting students who are enrolled in any 
        // database course by filtering students 
        // whose courseId matches with any id in 
        // dbcourse array 
        Student.find({ courseId: { $in: dbcourse } })
            .then(data => {
                console.log("Students in Database Courses:")
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    })
    .catch(error => {
        console.log(error);
    })
