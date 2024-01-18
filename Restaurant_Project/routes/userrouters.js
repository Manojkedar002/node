const express = require('express');
const { getUserController,updateUserController, resetPasswordController, deleteUserController } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//get user
router.get('/getuser', authMiddleware, getUserController);

//update User
router.put('/updateuser', authMiddleware, updateUserController);

//reset password
router.post('/resetpassword', authMiddleware, resetPasswordController);

//delete user
router.delete('/deleteuser/:id', authMiddleware, deleteUserController);
module.exports = router


