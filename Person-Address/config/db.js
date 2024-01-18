
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log('connection succesful'.white.bgGreen) })
    .catch((err) => { console.log(err) });