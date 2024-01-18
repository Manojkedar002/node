const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/product-user')
    .then(() => { console.log('connection is succesful') })
    .catch((err) => { console.log(err) });