const express = require('express');
const connectDB = require('./db/connection');
const app = express();
require('./db/connection')
connectDB();
require('./models/schema');
require('./routes/routers')
app.use(express.json());
app.get('/', (req, res) => {
    res.end('happy new year 2024');
});

app.listen(3000, () => {
    console.log('server is started  on 3000')
})

