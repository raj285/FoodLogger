const express = require('express');
const { organicModel } = require('../model/organicFood');
const organicRouter=express.Router();

// entry 
organicRouter.post('/adminOrgEntry',async (req,res)=>{
    try {
        const data=new organicModel(req.body);
        await data.save();
        res.status(200).send({message:"data updated succesfully"});
    } catch (error) {
        res.status(404).send({message:"something went wrong"})
    }
})
// get all
organicRouter.get('/organicFood',async(req,res)=>{
    try {
        let data= await organicModel.find();
        res.status(200).send(data);
        
    } catch (error) {
        res.status(404).send({ message: "something went wrong" });
    }
})
// get by id
organicRouter.get("/organicFoodInCart", async (req, res) => {
  try {
    const id = req.query._id;
    let data = await organicModel.findById(id);
    console.log(req.body);
    console.log(req.body.id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send({ message: "something went wrong" });
  }
});

module.exports=organicRouter; 