const Customer = require("../models/customer");
const mongoose = require('mongoose');

const addCustomerController = async (req, res) => {
    try {
        const { name, productId, addressId } = req.body
        const customer = await Customer.create({ name, productId, addressId });
        return res.status(201).send({
            success: true,
            message: "Customer succesfully added",
            customer
        })
     }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message:"error in addCustomerController"
        })
    }
}
const getAllCustomerController = async (req, res) => {
    try {
        const allcustomer = await Customer.aggregate([
            {
                $lookup: {
                  from: 'products',
                  localField: 'productId',
                  foreignField: '_id',
                  as: 'Product Details'
                }
            },
            {
                $lookup: {
                  from: 'addresses',
                  localField: 'addressId',
                  foreignField: '_id',
                  as: 'Address Details'
                }
              }
        ]);
        return res.status(200).send({
            success: true, message: "get all customer succesfully",
        allcustomer})
        
     }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message:"error in getAllCustomerController"
        })
    }
}
const getCustomerController = async (req, res) => {
    try { 
        const _id = req.params.id;
        const customer = await Customer.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(_id) }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "Product Details"
                }
            },
            {
                $lookup: {
                    from: "addresses",
                    localField: "addressId",
                    foreignField: "_id",
                    as: "Address Details"
                }
            },
        ]);
        return res.status(200).send({
            success: true,
            message: "get customer succesfully",
            customer
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message:"error in getCustomerController"
        })
    }
}
const updateCustomerController = async (req, res) => {
    const _id = req.params.id;
    const { name, productId, addressId } = req.body
    const updatedcustomer = await Customer.findByIdAndUpdate(_id,{name,productId,addressId});
    return res.status(200).send({
        success: false,
        message: "succesfully updated customer",
        updatedcustomer
    })
}
const deleteCustomerController = async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedcustomer = await Customer.findByIdAndDelete(_id);
        return res.status(200).send({
            success: true,
            message: "customer deleted succesfully",
            deletedcustomer
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "error in deleteCustomerController",

            
        })
    }
}

module.exports = {
    addCustomerController, getAllCustomerController,
getCustomerController,updateCustomerController,deleteCustomerController}