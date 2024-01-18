const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

// registerController
const registerController = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body
        const user1 = await User.findOne({ email });
        if (user1) {
            return res.status(404).send({
                success: false,
                message: "given mail id is already register",
            })
        }
        const salt=await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password, salt);
        const user = await User.create({ name, email, password:hashpassword, phone });
        return res.status(201).send({ success: true, message: "user succesfully added", user });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ success: false, message: "error in registerController" })
    }
}
//login 
const loginUserController = async (req, res) => {
    try { 
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(401).send({
                success: false,
                message: "Un-authorise User"
            });
        }
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ _id: user._id }, process.env.SECRETEKEY, { expiresIn: '7d' });
            return res.status(200).send({
                success: true,
                message: "Login succesfully",
                user,
                token
            })
        }
        else {
            return res.status(401).send({
                success: false,
                message:"invalid password"
            })
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            success: true,
            message:"error in loginUserController"
        })
    }
}
    module.exports={registerController,loginUserController}