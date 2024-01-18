const express = require('express');
const router = new express.Router();
const MensRanking = require('../models/mens');

router.post('/mens', async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    }
    catch (err) { res.status(400).send(err) }
});

//read data 
router.get('/mens', async (req, res) => {
    try {
        const getMens = await MensRanking.find().sort({ ranking: 1 })
        res.status(201).send(getMens);
    }
    catch (err) { res.status(400).send(err) }
});

//read particular data from database
router.get('/mens/:id', async (req, res) => {
    try {
        const id = req.params.id
        const getMens = await MensRanking.findById(id)
        res.status(201).send(getMens);
    }
    catch (err) { res.status(200).send(err) }
});

//update particular data from database
router.patch('/mens/:id', async (req, res) => {
    try {
        const id = req.params.id
        const getMens = await MensRanking.findByIdAndUpdate(id, req.body, { new: true }) //new:true updated data postman pe show karenga
        res.status(201).send(getMens);
    }
    catch (err) { res.status(200).send(err) }
});

//delete particular data from database
router.delete('/mens/:id', async (req, res) => {
    try {

        const getMens = await MensRanking.findByIdAndDelete(req.params.id)
        res.send(getMens);
    }
    catch (err) { res.status(500).send(err) }
});


router.get('/', async (req, res) => {
    res.send({ message: " olympics 2024 " })
});

module.exports = router;