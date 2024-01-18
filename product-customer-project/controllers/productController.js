const Product = require("../models/product");


//add product 
const addProductController = async (req, res) => {
    try {
        const { pid, pname, price } = req.body;
        const product = await Product.create({ pid, pname, price });
        return res.status(200).json({
            success:true,message:"product succesfully added",
            product
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message:"error in addProductController"
        })
    }
}

//get product
const getProductController = async (req, res) => {
    try {
        const _id = req.params.id;
        const product = await Product.findOne({ _id });
        if (!product) {
            return res.status(404).send({success:false,message:"product not found"  })
        }
        return res.status(200).send({success:true,message:"get product succesfully",product})
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message:"error in getProductController"
        })
    }
}


//update controller
const updateProductController = async (req, res) => {
    try {
        const _id = req.params.id
        const {pid,pname,price} = req.body
        
        const updatedproduct = await Product.findByIdAndUpdate(_id, {pid,pname,price} );
        return res.status(200).send({
            success: true, message: "updated product succesfully",
        updatedproduct})
     }
    catch(err)
    {
        console.log(err);
        return res.status(500).send({success:false,message:"error in updateProductController"})
    }

   
}
//Delete product
const deleteProductController = async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedproduct = await Product.findByIdAndDelete(_id);
        return res.status(200).send({
            success: true, message: "delete product succesfully",
       deletedproduct })
     }
    catch (err) {
        console.log(err);
        return res.send({
            success: false,
            message:"error in deleteProductController"
        })
    }
}    
//get all product
const getAllProductController = async (req, res) => {
    try {
        const allproduct = await Product.find();
        return res.status(200).send({
            success: true,
            message: "get all product succesfully",
            allproduct
        })
     }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message:"error in getAllProductController"
        })
    }
}
module.exports = {
    addProductController,
    getProductController,
    updateProductController,
    deleteProductController,
    getAllProductController
}