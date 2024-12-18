const express=require('express');
const entryRouter=express.Router();
const { User } = require("../model/User.js");

entryRouter.post("/signup", async (req, res) => {
  try {
    let data = new User(req.body);
    await data.save();
    res.send("signed up successfully");
  } catch (error) {
    res.send(`something went wrong : ${error}`);
  }
});
entryRouter.get("/login", async (req, res) => {
  try {
    let data = req.body;
    
  } catch (error) {}
});

module.exports=entryRouter;