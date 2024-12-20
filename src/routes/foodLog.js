const express = require("express");
const foodLogRouter = express.Router();
const jwt = require("jsonwebtoken");
const{foodLogModel}=require('../model/FoodLogItems')
const{Nutrients}=require('../model/Nutrients');
const{foodItemsModel}=require('../model/foodItems')
//entering data
foodLogRouter.post("/dairyEntry", async(req,res)=>{
    try {
        const{_id,quantity}=req.body;
        const nutrionalInformationPerCent = await foodItemsModel.findById({
          _id,
        });
         
        
        
        
    } catch (error) {
        
    }
})