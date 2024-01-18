const express = require('express');
const router = new express.Router();
const Player = require('../models/mens');

router.get('/', (req, res) => {
    res.send("World cup highest run scorer..")
})

router.post('/score', async (req, res) => {
    try {
        console.log(req.body);
        const addPlayer = new Player(req.body)
        const addedPlayer = await addPlayer.save();
        res.status(201).send(addedPlayer);
    }
    catch (err) { res.status(400).send(err) }
});

router.get('/score', async (req, res) => {
    try {

        const records = await Player.find().sort({ score: -1 });
        res.status(201).send(records);
        console.log(records);
    }
    catch (err) { res.status(400).send(err) }
});

router.get('/score/:id', async (req, res) => {
    try {

        const records = await Player.findById(req.params.id)
        res.status(201).send(records);
        console.log(records);
    }
    catch (err) { res.status(400).send(err) }
});

router.patch('/score/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const records = await Player.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).send(records);
        console.log(records);
    }
    catch (err) { res.status(400).send(err) }
});

router.delete('/score/:id', async (req, res) => {
    try {

        const records = await Player.findByIdAndDelete(req.params.id)
        res.status(201).send(records);
        console.log(records);
    }
    catch (err) { res.status(400).send(err) }
});

module.exports = router