
const express = require('express');
const { registerController, loginUserController } = require('../controllers/authController');
const router = express.Router();

//register user
router.post('/register', registerController);

//login user
router.post('/login',loginUserController)

module.exports = router;