
//get user

const User = require("../models/usermodel");
const bcrypt = require('bcryptjs');

const getUserController = async(req,res) => {
    try {
        //find user
        const user = await User.findById({ _id: req.body.id })
        //validation
        if (!user) {
            res.status(404).send({
                success: false,
                message:"user not found"
            })
        }
        //hide password
        user.password = undefined;
        //response
        res.status(201).send({
            success: true,
            message: "user data get succesfully",
            user
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            success: false,
            message: "error in get user Api",
            err
        })        
    }
    

}

//update user
const updateUserController = async (req, res) => {
    try {
        //get user
        const user = await User.findById({ _id: req.body.id })
        //validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message:"user not found"
            })
        }
        //update
        const { name, address, phone } = req.body;
        if (name) user.name = name;
        if (address) user.address = address;
        if (phone) user.phone = phone;
        //save User 
        await user.save();
        res.status(200).send({
            success: true,
           message:"user succesfully updated" 
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            success: false,
            message: "error in update user Api",
            err
        })
    }
}

// reset password
const resetPasswordController = async (req, res) => {
    try {
        const { email, password, newpassword } = req.body;
        
        if (!email || !newpassword || !password) {
            return res.status(500).send({
                success: false,
                message:"All field are required"
            });
        }
        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(500).send({
                success: false,
                message:"user not found OR invalid answer"
            })
        }
        console.log(password);
        console.log(user);
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            
            res.status(500).send({
                success: false,
                meassage: "incorrect datails"
            })
        }
        const hashpassword = await bcrypt.hash(newpassword, 10);
        user.password = hashpassword;
        await user.save();
        res.status(200).send({
            success: true,
            message:"password succesfully updated"
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message:"error in resetpassword Api"+err
        })
    }
}

//delete user controller
const deleteUserController = async (req, res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            success: true,
            meassage:"user profile deleted"
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message:"error in delete profile api"
        })
    }
}
 
module.exports = {
    getUserController,
    updateUserController,
    resetPasswordController,
    deleteUserController
}



