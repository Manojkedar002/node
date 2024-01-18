const express = require('express');
const app = express();
require('./db/conn');
const MensRanking = require('./models/mens');
const router = require('./routes/men');
const port = process.env.PORT || 3000;

app.use(express.json());    //jab json data express mai send kar rahe ho
// use request ko vo json mai accept karega 
//we will handle post 
app.use(router)
app.listen(port, () => {
    console.log(`connection is live on ${port}`)
});