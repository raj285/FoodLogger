const express = require("express");
const trendsRouter = express.Router();
const jwt = require("jsonwebtoken");
const { foodLogModel } = require("../model/FoodLogItems");
const { Nutrients } = require("../model/Nutrients");
trendsRouter.get("/trends",async (req,res)=>{
    try {
        const token = req.cookies.token;
        const userId = await jwt.verify(token, "*MARIJ9-e-9ishq#");
        const {startDate,endDate}=req.body;
        const foodLogData=await foodLogModel.find({userId,createdAt:{$gte:startDate,$lte:endDate}});
        const nutrientsData=await Nutrients.find({userId,createdAt:{$gte:startDate,$lte:endDate}});
        res.send(nutrientsData+foodLogData);
    } catch (error) {
        res.send("Something Went Wrong "+error+" !!!!!");
    }
})
module.exports=trendsRouter;