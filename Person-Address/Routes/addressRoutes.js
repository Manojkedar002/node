
const express = require('express');
const { addAddressController, getAddressController, getAllAddressController, updateAddressController, deleteAddressController } = require('../controllers/addressController');
const router = express();

//add Address
router.post('/address', addAddressController);
//get particular controller
router.get('/address/:pincode', getAddressController);

//get all Address
router.get('/address', getAllAddressController);
//update particular Address
router.put('/address/:id', updateAddressController);
//remove particular address
router.delete('/address/:id',deleteAddressController)
module.exports = router;