const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    pid: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Product = new mongoose.model('Product', productSchema);
module.exports = Product;