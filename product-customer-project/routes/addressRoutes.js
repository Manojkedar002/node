
const express = require('express');
const { addAddressController, getAllAddressController, getAddressController, updateAddressController, deleteAddressController } = require('../controllers/addressController');
const router = express.Router();

//add address
router.post('/address', addAddressController);
//get all addresses
router.get('/address', getAllAddressController);
//get address
router.get('/address/:id', getAddressController);
//update address
router.put('/address/:id', updateAddressController);
//delete address
router.delete('/address/:id', deleteAddressController);

module.exports=router