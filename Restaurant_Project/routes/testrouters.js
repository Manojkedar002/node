const express = require('express');
const { testUserContoller } = require('../controllers/testContoller');
const router = express.Router();

router.get('/test-user', testUserContoller);

module.exports = router;