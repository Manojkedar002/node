const express = require('express');
const app = express();
app.use(express.json());


require('../db/connection');
const router = require('../route/routers');
port = 3000;

app.use(router);

app.listen(port, () => {
    console.log(`server started at port ${port}`);
});