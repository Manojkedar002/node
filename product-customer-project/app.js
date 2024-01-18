
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT
require('./config/db')
app.use(express.json());
app.use('/api/v1', require('./routes/productRoutes'));
app.use('/api/v1', require('./routes/addressRoutes'));
app.use('/api/v1', require('./routes/customerRoutes'));

app.get('/', (req, res) => {
    res.send('<h1>welcome to e-commerce website</h1>')
});

app.listen(port, () => {
   console.log(`server is running on ${port}`) 
});