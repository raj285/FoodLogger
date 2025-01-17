// const { text } = require('express');
const mongoose=require('mongoose');

const organicSchema=new mongoose.Schema({
    imagelink:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    weight:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    nutritionalInfo:{
        type:String,
        required:true,
    }
},{timestamps:true})

const organicModel = mongoose.model("organicFoods", organicSchema);
module.exports={organicModel};