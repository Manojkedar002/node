
const express = require('express');
const { getUserController, updateUserController, deleteUserController } = require('../controllers/userController');
const authMiddleware=require('../middleware/authMiddleware')
const router = express.Router();

//get user
router.get('/getuser', authMiddleware, getUserController);
//update user
router.put('/updateuser', authMiddleware, updateUserController);
 //delete user
 router.delete('/deleteuser', authMiddleware, deleteUserController);

module.exports = router
