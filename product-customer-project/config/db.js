
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
.then(() => { console.log("CONNECTION SUCCESFUL"); })
.catch((err)=>{console.log(err)})

