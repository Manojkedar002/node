const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const colors = require('colors');
const cors = require("cors");


const PORT= 3000


//middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/test", require('./routes/testrouters'));
app.use("/auth", require('./routes/authrouters'));
app.use("/user", require('./routes/userrouters'));
app.use("/restaurant", require('./routes/retaurantRoutes'));


const connectDB = require('./config/db');
connectDB();
app.get('/', (req, res) => {
    res.send('<h1>welcome to food server</h1>')
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`.white.bgMagenta);
});