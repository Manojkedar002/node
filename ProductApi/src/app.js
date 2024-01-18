const express = require('express');
const app = express();
const port = 3000;
require('../db/dbconn');
const bodyparser = require('body-parser');
const Product = require('../models/schema');
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.post('/product', async (req, res) => {
    data = {
        pid: req.body.pid,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    }
    //console.log(data);
    productdata = await Product.create(data);
    res.send(productdata);
})

app.get('/product', async (req, res) => {
    const existProduct = await Product.find().sort({ price: 1 });
    if (!existProduct) {
        res.send("given id product is not avilable")
    }
    console.log(existProduct);
    res.send(existProduct);
});
app.get('/product/:pid', async (req, res) => {
    try {
        const existProduct = await Product.findOne({ pid: req.params.pid });
        console.log(existProduct);
        if (!existProduct) {
            res.send("given id product is not avilable")
        }
        res.send(existProduct);
    }
    catch (err) {
        res.status(400).send(err)
    }

})


app.patch('/product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(req.body);
        const records = await Player.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).send(records);
    }
    catch (err) { res.status(400).send(err) }
});




app.get("/", (req, res) => {
    res.send("welcome to D-mart");
});

app.listen(port, () => {
    console.log(`server is running on ${port}`)
});