const JobSeeker = require('../models/schema');
const testController = (req, res) => {
    const { name } = req.body;

    res.status(201).send(`your name is ${name}`);
}

module.exports = testController