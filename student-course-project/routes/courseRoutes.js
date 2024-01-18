const express = require('express');
const { addCourseController, getCourseController, updateCourseController, getAllCourseController, deleteCourseController } = require('../controllers/courseController');
const router = express.Router();
//add course
router.post('/course', addCourseController);

//get course
router.get("/course/:id", getCourseController);

//get all courses
router.get('/course',getAllCourseController)

//update course
router.put('/course/:id', updateCourseController);

//delete course
router.delete('/course/:id', deleteCourseController);

module.exports = router;