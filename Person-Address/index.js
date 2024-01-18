
const express = require('express');
const app = express();
const colors = require('colors');
const morgan=require('morgan')
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT
require('./config/db');

//middleware

app.use(express.json());


app.use('/api/v1', require('./Routes/addressRoutes'));
app.use('/api/v1', require('./Routes/personRoutes'));
//app.use('/api/v1',);

 

app.get("/", (req, res) => {
   res.send(`<h1>we are storing person data</h1>`) 
});

app.listen(port, () => {
   console.log(`server is running on ${port}`.bgMagenta) 
});