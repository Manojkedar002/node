const express = require('express');
const router = new express.Router();
const Student = require('../models/students.js');
router.post('/students', async (req, res) => {
    try {
        const user = new Student(req.body);
        createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch (err) { res.status(400).send(err) };
});

router.get('/students', async (req, res) => {
    try {
        const user = await Student.find();
        res.send(user);
    }
    catch (err) {
        res.send(err);
    }
});


router.get('/students/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Student.findById(id);
        res.send(user);
    }
    catch (err) {
        res.send(err);
    }
});


//update student by its _id
router.patch('/student/:id', async (req, res) => {
    try {
        const _id = req.params.id
        console.log(req.body);
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(201).send(updateStudent);

    }
    catch (err) { res.status(400).send(); }
});

//delete student
router.delete('/student/:id', async (req, res) => {
    try {

        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deleteStudent) { res.status(400).send(); }
        req.send(deleteStudent);
    }
    catch (err) { res.status(500).send(err) }
});

module.exports = router;