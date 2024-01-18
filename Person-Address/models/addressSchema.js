
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    city: { type: String, required: true },
    district: { type: String, required: true },
    pincode: { type: Number, required: true }
});

const Address = new mongoose.model('Address', addressSchema);

module.exports = Address;