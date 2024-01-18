var mongoose = require('mongoose');

var productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: Number
    },
    {
        timestamps: true
    }
)
const Product = mongoose.model("Product", productSchema);
module.exports = Product;