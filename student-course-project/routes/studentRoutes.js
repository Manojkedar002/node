const express = require('express');
const { addStudentController, getStudentWithCourseController, updateStudentController, deleteStudentController, getAllStudentWithCourseController } = require('../controllers/studentController');

const router = express.Router();

//add student
router.post('/student', addStudentController);

//get all students
router.get('/student',getAllStudentWithCourseController)

//get student 
router.get('/student/:id', getStudentWithCourseController);

//update student
router.put('/student/:id', updateStudentController);

//delete student
router.delete('/student/:id',deleteStudentController)

module.exports = router;