const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        champion: {
            type: Number,
            required: true
        },

    }
);

const Champion = mongoose.model('Champion', teamSchema);
module.exports = Champion;