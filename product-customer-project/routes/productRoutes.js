const express = require('express');
const { addProductController, getProductController, updateProductController, deleteProductController, getAllProductController } = require('../controllers/productController');
const router = express.Router();
//add product
router.post('/product', addProductController);
//get all product
router.get('/product',getAllProductController)
//get product
router.get('/product/:id', getProductController);
//update product
router.put('/product/:id', updateProductController);
//delete product
router.delete('/product/:id', deleteProductController);

module.exports=router