const Person = require("../models/personSchema");

const mongoose=require('mongoose')

//add person 
const addPersonController = async (req, res) => {
    try {
        const { name, age, phone, addressId } = req.body
        console.log(addressId)
        const person = await Person.create({name, age, phone,addressId});
        res.status(201).send(person);
       }
    catch (err) {
        console.log(err);
        res.send({
            success: false,
            message: "error in addPersonController api",
            err
        })
    }
}

//get person
const getPersonController = async (req,res) => {
    try {
        const _id = req.params.id;
        const personWithaddress = await Person.aggregate([
            {
                $match: { _id:new mongoose.Types.ObjectId(_id) }
            },
            {
                $lookup: {
                    from: "addresses",
                    localField: "addressId",
                    foreignField: "_id",
                    as:"person-address-details"
                }
                
            },
            {
                $unwind: { path: "$person-address-details" }
            }
        ])
      if (!personWithaddress ||personWithaddress.length === 0) {
    return res.status(404).json({
        success: false,
        message: "Student not found",
    });
}

res.status(200).json(personWithaddress[0]);
        
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message:"error in getPersonController"
        })
    }
}

//get all person
const getAllPersonController = async (req, res) => {
    try {
        const allpersonWithaddress = await Person.aggregate([
    
            {
                $lookup: {
             from: "addresses",
             localField: "addressId",
             foreignField: "_id",
            as:"person-address-details"
                },
            },
            {
                $unwind:{path:"$person-address-details"}
            }
        ])
        if (!allpersonWithaddress) {
            return res.status(404).send({
                success: false,
                message:"user not found"
            })
        }
        return res.status(200).send({
            success: true,
            message: "all person get succesfully",
            allpersonWithaddress
        })

    }
    catch (err) {
        console.log(err)
        res.status.send(500).send({
            success: false,
            message:"error in getAllPersonController"
        })
    }
}
//update person controllers
const updatePersonController = async (req, res) => {
    try { 
        const _id = req.params.id
        const { name, age, phone, addressId } = req.body
         const updatedperson = await Person.findByIdAndUpdate(_id, { name, age, phone, addressId });
        if (addressId) {
            const updatedperson = await Person.aggregate([
                {
                    $match: { _id: new mongoose.Types.ObjectId(_id) }
                },
                {
                    $lookup: {
                        from: 'addresses',
                        localField: 'addressId',
                        foreignField: '_id',
                        as: 'person-address-details'
                    }
                },
                {
                    $unwind: '$person-address-details'
                },
    
            ]);
            res.json(updatedperson)
        }
        else {
            res.json(updatedperson)
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({
            success: true,
            message:"error in updatePersonController"
        })
    }
}
//delete Person
const deletePersonController = async (req, res) => {
    try {
        const _id=req.params.id
        const deletedperson = await Person.findByIdAndDelete(_id);
        return res.status(200).send({
            success: true, message: "person succesfully deleted",
        deletedperson})
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message:"error in deletePersonController"
        })

    }
}

module.exports = {
    addPersonController, getPersonController,
    getAllPersonController, updatePersonController,
    deletePersonController
    
}


