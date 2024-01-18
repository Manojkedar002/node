const User = require("../models/usermodel");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerController = async(req, res) => {
    try {
        //validation
        console.log(req.body)
        const { name, email, password, phone, address, answer } = req.body
        if (!name || !password || !email || !phone || !address || !answer) {
          return  res.status(500).send({
                success: false,
                meassage:'error in register API'
            })
        }
        //cheak user
        const existuser = await User.findOne({ email });
        if (existuser) {
            return res.status(500).send({
                success: false,
                meassage:"User already exist please login"
            })
        }
        const hashpassword = await bcrypt.hash(password, 10);
        //craete new user
        const userdata = await User.create({ name, email, password:hashpassword, phone, address,answer })
        res.status(201).send({
            success: true,
            meassage:'succesfully user resister'
        })
    }
    catch (err) {
        console.log(err)
    }
}

//login

const loginController = async(req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(500).send({
                success: false,
                meassage: "please provide required information"
            })
        }
        const user=await User.findOne({email})
        if (!user) {
            return res.status(500).send({
                success: false,
                meassage: "User not found"
            })
        }
        //cheak user password | verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETEKEY,
            {expiresIn:"7d"})
            res.status(200).send({
                success: true,
                meassage: "login succesfully",
                user,
                token
            
            })
        }
        else{res.status(500).send({meassage:"incorrect details"})}
         
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            meassage: "error in login API",
            err
        })
    }
}

module.exports = { registerController, loginController }