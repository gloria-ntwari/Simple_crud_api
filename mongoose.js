const express=require('express');
const mongoose=require('mongoose');
const Product=require('./models/product.model.js');
const productRoute=require('./Routes/product.router.js')
const app=express();
//middleware config
app.use(express.json());//If we do not cofigure we can get undefined error


//Routes
app.use('/api/products',productRoute);


app.get('/',(req,res)=>{
res.send("Hello word") ;
});


//Finding the products from the database
// app.get('/api/products',async(req,res)=>{
// try{
// const products=await Product.find({});
// res.status(200).json({products});
// }
// catch{
//   res.status(500).json({message:message.error});
// }
// });



//Finding only one id basing on its id
// app.get('/api/products/:id',async(req,res)=>{
// try{
// const {id}=req.params;
// const product=await Product.findById(id);
// res.status(200).json(product);
// }
// catch{
//   res.status(500).json({message:message.error});
// }
// });



//Creating a specific product
// app.post('/api/products',async(req,res)=>{
//   try{
// const product=await Product.create(req.body);
// res.status(200).json(product);
//   }
//   catch{
// res.status(500).json({message:message.error});
//   }
// });


//Updating basing on the id
// app.put('/api/products/:id',async(req,res)=>{
// try{
// const {id}=req.params;
// const product=await Product.findByIdAndUpdate(id,req.body);
// if(!product)return res.status(404).json({message:"The product not found"});
// const updatedProduct=await Product.findById(id);//Get updated product from db
// res.status(200).json(updatedProduct);

// }
// catch{
//   res.status(500).json({message:message.error});
// }
// });


//Deleting the record in the db
// app.delete('/api/products/:id',async(req,res)=>{
// try{
// const {id}=req.params;
// const product=await Product.findByIdAndDelete(id,req.body);

// if(!product) return res.status(404).json({message:"The product not found"});
// res.status(200).json({message:"The product was deleted"})
// }
// catch{
//   res.status(500).json({message:message.error});
// }
// });
mongoose.connect("mongodb://localhost:27017")
.then(()=>{
  console.log("Connection successfullly..");
})
.catch(()=>{
  console.log("There is the error in the connection please");
})
app.listen(3000,()=>{
  console.log('Server running on port 3000..');  
});