const express = require('express');
const router = express.Router();
const Champion = require('../models/schema');

router.post('/champion', async (req, res) => {
    try {
        console.log(req.body);
        const winner = new Champion(req.body)
        const add = await winner.save();
        res.status(201).send(add);
    }
    catch (err) { res.status(400).send(err) }
});




module.exports = router;