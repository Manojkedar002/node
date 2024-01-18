const User = require("../models/schema");


const registerController = async (req, res) => {
    
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).send({
                success: false,
                message:"given fields are required"
            })
        }
        const exixtinguser = await User.findOne({ email })
        if (exixtinguser) {
            return res.status(200).send({
                success: false,
                message:"user is already exist please login"
            })
    }
           
    const user = await User.create({ name, email, password });
    const token = user.createJWT();
        return res.status(201).send({
             success: true,
             message: "User created successfully",
            user,
            token
        })
        
    
   
}

//login 
const loginController = async (req, res) => {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
        res.send("please provide required fields")
    }
    //find user
    const user = await User.findOne({ email });
    if (!user) {
        return res.send('user not found')
    }
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
        return res.send('invalid credencials')
    }
    user.password = undefined;
    const token = user.createJWT();
    res.status(200).json({
        success: true,
        message: "login successfully",
        user,
        token
    })
}

module.exports={registerController,loginController}