const express = require('express');

require('./src/db/conn.js')
require("./src/models/students.js")
const app = express();
const port = process.env.PORT || 3000;
const studentRouter = require('./src/routers/student.js')
app.use(express.json());
app.use(studentRouter);
app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});