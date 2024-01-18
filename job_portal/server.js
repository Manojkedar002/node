//import 
const express = require('express');
//import express from "express";  //package.json file mandhe type:"module" kele tar
const dotenv = require('dotenv');
const colors = require("colors");
const cors = require('cors');
require('express-async-errors')
const morgan = require('morgan');
const connectDB = require("./config/db.js");
const testRoute = require('./routes/testRoute.js');
const authroute=require('./routes/authroute.js');
const { errormiddlewares } = require('./middleware/errormiddleware.js');

//dot env config
dotenv.config()
const PORT = process.env.PORT || 3000
//rest object
const app = express();
//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
//validation middleware
app.use(errormiddlewares);

//mongo db connection
connectDB();
app.use('/api/v1/test', testRoute);
app.use('/api/v1/auth',authroute)

//listen
app.listen(PORT, () => {
    console.log(`server is running in ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.white)
})