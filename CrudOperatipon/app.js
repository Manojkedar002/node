//define express
var express = require("express");
var app = express();

//import all required module
var mongoose = require('mongoose');
var mongodb = require("mongodb");
var bodyparser = require('body-parser');
const Product = require("./models/models");

//create connection
mongoose.connect("mongodb://localhost:27017/mydb").then(() => {
    console.log('connected to database');
    app.listen(3000, () => {
        console.log('server is started at port 3000')
    })
}).catch((error) => {
    console.log(console.error())
})


//route
app.get('/', (req, resp) => {
    resp.send("Hello Api")
})

app.get('/blog', (req, resp) => {
    resp.send("Hello blog my blog")
})

app.get('/product', async (req, resp) => {
    try {
        const products = await Product.find({});
        resp.status(200).json(products)

    }
    catch (error) {
        console.log(error.message);
        resp.status(500).json({ message: error.message })
    }
})


app.get('/product', async (req, resp) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        resp.status(200).json(product)

    }
    catch (error) {
        console.log(error.message);
        resp.status(500).json({ message: error.message })
    }
})


app.post('/product', async (req, resp) => {
    try {
        const product = await Product.create(req.body);

    }
    catch (error) {
        console.log(error.message);
        resp.status(500).json({ message: error.message })
    }
})
mongoose.set("strictQuery", false)

