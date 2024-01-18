const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Login-tut')
    .then(() => { console.log('connection is succesful') })
    .catch((err) => { console.log('no connection') })