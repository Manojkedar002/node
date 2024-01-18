const mongoose = require('mongoose');


const playerSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: true,
        },
        score: {
            type: Number,
            required: true
        },
        contry: {
            type: String,
            required: true
        }

    }
);

const Player = new mongoose.model('Player', playerSchema);
module.exports = Player;