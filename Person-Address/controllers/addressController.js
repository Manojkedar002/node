const Address = require("../models/addressSchema");

//add Address
const addAddressController = async (req, res) => {
    try { 
        const { city, district, pincode } = req.body
        console.log(city, district, pincode);
        const a1 = await Address.create({ city, district, pincode });
        res.send({city,district,pincode})
    }
    catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: "error in addcontroller api",
            err
        })
    }
}

//get Address :pincode
const getAddressController = async (req, res) => {
  
    try {
        const pincode = req.params.pincode
    console.log( pincode)
    const a1 = await Address.findOne({ pincode });
    console.log(a1);

    res.json(a1)
    // res.json({pincode: Number(pincode)})
    }
    catch (err) {
        console.log(err);
        res.send({
            success: false,
            message:"error in getAddressController api"
        })
    }
}

//get all Address
const getAllAddressController = async (req, res) => {
    try {
        const a1 = await Address.find();
        console.log(a1);
        res.send(a1)
        
    }
    catch (err) {
        console.log(err);
        res.send({
            success: false,
            message:"error in getAllAddressController api"
        })
    }
}

//update Address
const updateAddressController = async (req, res) => {
  
    try {
        const _id = req.params.id
        const updatedata=req.body
        console.log( req.params.id);
    const a1 = await Address.findByIdAndUpdate(_id,updatedata);
    console.log(a1);

    res.json(a1)
    // res.json({pincode: Number(pincode)})
    }
    catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: "error in updateAddressController api",
            err
        })
    }
}

//delete Address
const deleteAddressController = async (req, res) => {
  
    try {
        const _id = req.params.id
        console.log( req.params.id);
    const a1 = await Address.findByIdAndDelete(_id);
    console.log(a1);

    res.json(a1)
    // res.json({pincode: Number(pincode)})
    }
    catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: "error in deleteAddressController api",
            err
        })
    }
}


module.exports = {
    addAddressController,
    getAddressController,
    getAllAddressController,
    updateAddressController,
    deleteAddressController
}