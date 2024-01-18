const express = require('express');
const router = express.Router();

// router.get('/', () => {
//     console.log("hello");
// })

router.route("/").get((req, res) => {
    console.log('hello');
    return res.send('hello')
});



module.exports = router