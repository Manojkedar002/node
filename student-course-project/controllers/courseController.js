const Course = require("../models/courseSchema");

const addCourseController = async (req, res) => {
    try {
        const { cid, cname } = req.body;
        await Course.create({ cid, cname })

        res.status(200).json({ cid, cname });

    }
    catch (error) {
        console.log(error);
        res.send({
            success: false,
            message: "error course api",
            error
        })
    }
}

//get course
const getCourseController = async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id)
        const course=await Course.findById({_id})
        if (!course) {
            return res.status(404).send({
                success: false,
                message:"course not found"
            })
        }
        else {
            console.log(course)
        res.status(200).json({success:true,message:"courses",course})
        }

    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"error in get course api"
        })
    }
}
//get all courses
const getAllCourseController = async (req, res) => {
    try {
        const allcourses = await Course.find();
        return res.status(200).send({
            success: true,
            message:"get all courses",allcourses})
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message:"error in getAllCourseController"
        })
    }
}
//update course
const updateCourseController = async (req, res) => {
    try {
        const { cname,cid} = req.body
        const id = req.params.id
        const updatedcourse = await Course.findByIdAndUpdate(id, { cname, cid });
        return res.status(200).send({success:true,message:"course succesfully updated"})
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({success:false,message:"error in update controller api"})
    }
}
//deleteCourseController
const deleteCourseController = async (req, res) => {
    try {
        const id=req.params.id;
    const detetecourse = await Course.findByIdAndDelete(id);
    return res.status(200).send({
        success: true,
        message:"course deletded succesfully"
    })
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message:'error in deleteCourseController'
        })
    }

}

module.exports = {
    addCourseController,
    getCourseController,
    updateCourseController,
    getAllCourseController,
    deleteCourseController
}