const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');
const userAuth = require('../models/authmiddleware');
//create router
router.route('/test').post(testController);
router.post('/test-post',userAuth,testPostController)
module.exports = router