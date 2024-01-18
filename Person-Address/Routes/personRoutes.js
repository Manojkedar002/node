
const express = require('express');
const { addPersonController, getPersonController, getAllPersonController, updatePersonController, deletePersonController } = require('../controllers/addPersonController');
const router = express.Router();
//add person
router.post('/person', addPersonController);
//get person
router.get('/person/:id', getPersonController);
//get all person
router.get('/person', getAllPersonController);
//update person
router.put('/person/:id', updatePersonController);
//delete person
router.delete('/person/:id',deletePersonController)


module.exports=router