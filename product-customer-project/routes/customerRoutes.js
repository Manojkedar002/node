
const express = require('express');
const { addCustomerController, getAllCustomerController, getCustomerController, updateCustomerController, deleteCustomerController } = require('../controllers/customerController');
const router = express.Router();

//add Customer
router.post('/customer', addCustomerController);

//get all Customer
router.get('/customer', getAllCustomerController);

//get customer
router.get('/customer/:id', getCustomerController);

//update customer
router.put('/customer/:id', updateCustomerController);

//delete customer
router.delete('/customer/:id', deleteCustomerController);

module.exports=router