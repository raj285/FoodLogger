const express = require("express");
const profileRouter = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../model/User.js");
// getprofile
profileRouter.get('/getProfile', async(req,res)=>{
    try {
        const token = req.cookies.token;
        const userId = await jwt.verify(token, "*MARIJ9-e-9ishq#");
        res.send(await User.findById(userId));
    } catch (error) {
        res.status(400).send("Something went wrong "+error);
    }

})
//changeprofile
// have to do
module.exports=profileRouter;