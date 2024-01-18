const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
require('./config/dbconn');
const port=process.env.PORT 

app.use(express.json())
app.use('/api/v1',require("./routes/studentRoutes"));
app.use('/api/v1', require('./routes/courseRoutes'));




app.get('/', (req, res) => {
    res.send('<h1>Student Courses</h1>'); 
});

app.listen(port, () => {
    console.log(`server is running on ${port}`); 
});