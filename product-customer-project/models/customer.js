
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
   
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    addressId: { type: mongoose.Schema.Types.ObjectId ,ref:"Address"}
});

const Customer = new mongoose.model('Customer', customerSchema);
module.exports=Customer