const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Emplogin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('connection done') })
    .catch((err) => { console.log(err) })