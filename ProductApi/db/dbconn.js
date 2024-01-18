const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Products')
    .then(() => { console.log('connection done') })
    .catch((err) => { console.log(err) })