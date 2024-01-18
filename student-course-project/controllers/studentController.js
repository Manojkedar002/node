const Student = require("../models/studentSchema");
const Course = require("../models/courseSchema");
const mongoose=require('mongoose')
//add student
const addStudentController = async (req, res) => {
    try { 
        const { sid, name, courseId } = req.body;
        await Student.create({sid,name,courseId})
        res.status(200).json({ sid, name, courseId });
      
    }
    catch (error) {
        console.log(error);
        res.send({
            success: false,
            message: "error in addstudent api",
            error
        })
    }
}

const getStudentWithCourseController = async (req, res) => {
    try {
        const studentId = req.params.id;
        console.log(studentId);

        // Use Mongoose's aggregate method with $lookup
        const studentWithCourse = await Student.aggregate([
            {
                $match: { _id:new mongoose.Types.ObjectId(studentId) }
            },
            {
                $lookup: {
                    from: "courses", // Name of the Course collection
                    localField: "courseId", // Field in the Student collection
                    foreignField: "_id", // Field in the Course collection
                    as: "courseData"
                }
            },
            {
                $unwind: {
                    path: "$courseData",
                }
            }
        ]);
        
        if (!studentWithCourse || studentWithCourse.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json(studentWithCourse[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error retrieving student with course",
            error,
        });
    }
};

// getAllStudentWithCourseController
const getAllStudentWithCourseController = async (req, res) => {
    try { 
        const allStudentsWithCourses = await Student.aggregate([
            {
              $lookup: {
                from: 'courses',
                localField: 'courseId',
                foreignField: '_id',
                as: 'courseInfo'
              }
            },
            {
              $unwind: '$courseInfo'
            }
          ]);
          
          // Return the result
          res.json(allStudentsWithCourses);
          
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message:"error in getAllStudentWithCourseController"
        })
    }
   }  


//update student controller 
const updateStudentController = async (req, res) => {
    try {
        const id = req.params.id;
        const { sid, name, courseId } = req.body;
         const updatedstudent = await Student.findByIdAndUpdate(id, { sid, name,courseId });
        // If a new course ID is provided in the request body, update the student's course
        if (req.body.courseId) {
            // Perform a $lookup to get the updated course information
            const updatedStudentWithCourse = await Student.aggregate([
                {
                    $match: { _id: new mongoose.Types.ObjectId(id) }
                },
                {
                    $lookup: {
                        from: 'courses',
                        localField: 'courseId',
                        foreignField: '_id',
                        as: 'courseInfo'
                    }
                },
                {
                    $unwind: '$courseInfo'
                },
        
            ]);
  
            res.send(updatedStudentWithCourse[0]); // Return the updated student with course information
      } else {
        res.json(updatedstudent); // Return the updated student without course information
      }       
    }
    catch (err) {
        console.log(err);
        return res.send({success:false,message:"erroe updateCourseController"})
    }
}

//delete student 
const deleteStudentController = async (req, res) => {
    try {
        const deletedstudent =await Student.findByIdAndDelete(req.params.id)
        return res.status(200).send({
            success: true, message: "student succesfully deletded",
         deletedstudent})
     }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message: "error in deleteStudentController",
            err
          })
    }
}

module.exports = {
    addStudentController,
    getAllStudentWithCourseController,
    getStudentWithCourseController,
    updateStudentController,
    deleteStudentController,}