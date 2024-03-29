
const express = require('express');
const app = express();
require('./config/db');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use('/api/v1', require('./routes/authRoutes'));
app.use('/api/v1',require('./routes/userRoutes'))

// app.get('/', (req, res) => {
//     return res.send(`<h1>welocome</h1>`);
// });

app.listen(4545, () => {
    console.log('server is running on 4545'); 
});