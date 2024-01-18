const Address = require("../models/address");


//add address
const addAddressController = async (req, res) => {
    try {
        const { city, district, pincode } = req.body;
        const address = await Address.create({ city, district, pincode });
        return res.status(200).send({success:true,message:"Address succesfully added"})
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message:"error in addAddressController"
        })
    }
}

//get address
const getAddressController = async (req, res) => {
    try { 
        const _id = req.params.id;
        const address = await Address.findById(_id);
        if (!address) {
            return res.status(404).send({
                success: false,
                message:"address not found"
            })
        }
        return res.status(200).send({
            success: true,
            message: "get address succesfully",
            address
        })
        
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message:"error in getAddressController"
        })
    }
}

//get all addresses 
const getAllAddressController = async (req, res) => {
    try {
        const addresses = await Address.find();
        return res.status(200).send({
            success: true,
            message: "get all address succesfully",
            addresses
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message:"error in getAllAddressController"
        })
    }
}
//update address
const updateAddressController = async (req, res) => {
    try { 
        const _id = req.params.id;
        const { city, district, pincode } = req.body;
        const updatedaddress=await Address.findByIdAndUpdate(_id,{city,district,pincode})
        return res.status(200).send({
            success: true,
            message: "updated address succesfully",
            updatedaddress
       })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message:"error in updateAddressController"
        })
    }
}
const deleteAddressController = async (req, res) => {
    try{
        const deletedaddress = await Address.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            success: true,
            message: "Address delete succesfully",
            deletedaddress
        })
     }
    catch (err) {
        console.log('err');
        res.status(500).send({
            success: false,
            message:"error in deleteAddressController"
        })
    }
}
module.exports = {
    addAddressController, getAddressController,
    getAllAddressController, updateAddressController,
    deleteAddressController
}