//Schema defines the structure of the documents within a collection
//model :Basing on the provided schema it allows you to perform database operations
const { Timestamp } = require('bson');
const { required } = require('joi');
const mongoose=require('mongoose');
const { type } = require('mquery/lib/env');

const ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please insert the name"],

    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true,
        default:0
    }
},
{
    timestamps:true,
}
);
const Product=mongoose.model("Product",ProductSchema);
module.exports=Product; 