const Product=require('../models/product.model.js');

const getProducts=async(req,res)=>{
    try{
        const products=await Product.find({});
        res.status(200).json({products});
        }
        catch{
          res.status(500).json({message:message.error});
        }
    };
 const getProduct=async(req,res)=>{
    try{
        const products=await Product.find({});
        res.status(200).json({products});
        }
        catch{
          res.status(500).json({message:message.error});
        }
 }   

const createProduct=async(req,res)=>{
  try{
const product=await Product.create(req.body);
res.status(200).json(product);
  }
  catch{
res.status(500).json({message:message.error});
  }
}

const updateProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
        if(!product)return res.status(404).json({message:"The product not found"});
        const updatedProduct=await Product.findById(id);//Get updated product from db
        res.status(200).json(updatedProduct);
        
        }
        catch{
          res.status(500).json({message:message.error});
        }
}

const deleteProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id,req.body);
        
        if(!product) return res.status(404).json({message:"The product not found"});
        res.status(200).json({message:"The product was deleted"})
        }
        catch{
          res.status(500).json({message:message.error});
        }
}
    module.exports={
        getProducts,
        getProduct,
        createProduct,
        updateProduct,
        deleteProduct,
    };
        