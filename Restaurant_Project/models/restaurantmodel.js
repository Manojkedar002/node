
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    title: { type: String, required: [true, "retaurant name is required"] },
    imageurl: { type: String },
    foods: { type: Array },
    time: { type: String },
    pickup: { type: Boolean, default: true },
    delivery: { type: Boolean, default: true },
    isOpen: { type: Boolean, default: true },
    logourl: { type: String },
    rating: { type: Number, min: 1, max: 5, default: 2 },
    ratingCount: { type: String },
    code: { type: String },
    coords: {
        id: { type: String, },
        latitude: { type: Number },
        latitudeDelta: { type: Number },
        longitude: { type: Number },
        longitudeDelta: { type: Number },
        address: { type: String },
        title:{type:String}
    }
    
    
}, { timestamps: true });
const Restaurant = new mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant