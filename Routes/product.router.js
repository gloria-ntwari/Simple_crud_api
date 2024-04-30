const Product=require('../models/product.model.js');
const express=require('express');
const router=express.Router();
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct}=require('../controllers/controller.js');

router.get('/',getProducts);
router.get('/:id',getProduct);
router.post('/',createProduct);
router.put('id/:id',updateProduct);
router.delete('/:id',deleteProduct);

module.exports=router;

