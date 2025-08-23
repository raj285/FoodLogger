const express= require("express");
// const  router=express.Router();
const { CartModel } = require("../model/cart.js");
const {User} = require("../model/User.js");
const {authenticateMiddleWare} = require("../middleware/auth.js");
const { compareSync } = require("bcrypt");
const CartRouter= express.Router();
//  rout to add an item  to my  cart 
CartRouter.post("/addToCart", authenticateMiddleWare, async (req, res) => {
  try {
    const userId=req.user._id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }
    // console.log("user found");
    // console.log(user);
    let cart = await CartModel.findOne({ userId: userId });
    if (!cart) {
      cart = new CartModel({ userId: userId, products: [] });
    }
    // console.log(cart);
    const { productId, quantity } = req.body;
    let flag=0;
    for(let i=0 ; i<cart.products.length;i++){
      if(cart.products[i].productId.toString()===productId){
        cart.products[i].quantity+=quantity;
        flag=1;
        break;
      }
    }
    if(flag==0)cart.products.push({ productId, quantity });
    await cart.save();
    res.status(200).send(cart);
  } catch (error) {
    res.status(404).send({ message: `Something went wrong: ${error.message}` });
  }
});

// route to get the user cart
CartRouter.get("/getCart", authenticateMiddleWare, async (req, res) => {
  try {
    // console.log("inside get cart");
    const userId = req.user._id;
    let cart = await CartModel
      .findOne({ userId: userId });
      console.log(cart);
      cart1=await cart.populate("products.productId");
    if (!cart1) {
      return res.status(200).send({ message: "Cart is empty" });
    }
    console.log(cart1);
    res.status(200).send(cart1);
  } catch (error) {
    res.status(404).send({ message: `Something went wrong: ${error.message}` });
  }
});


// clearing the cart
CartRouter.delete("/clearCart",authenticateMiddleWare,async(req,res)=>{
  try{
    const userId=req.user._id;
    let cart=await CartModel.findOne({userId:userId});
    let cartId=cart._id;
    console.log(cart);
    await CartModel.findByIdAndDelete(cartId);
    res.status(200).send("cart cleared successfully");
  }
  catch(error){
    res.status(404).send({ message: `Something went wrong: ${error.message}` });
  }
});


// deleting one part of the cart
CartRouter.delete("/deleteItem/:productId",authenticateMiddleWare,async(req,res)=>{
  try{
    const userId=req.user._id;
    const productId=req.params.productId;
    let cart=await CartModel.findOne({userId:userId});
    if(!cart){
      return res.status(404).send("Cart not found");
    }
    let flag=0;
    // console.log(cart);
     for(let i=0 ; i<cart.products.length;i++){
      if(cart.products[i].productId.toString()===productId){
        flag=1;
        cart.products.splice(i,1);
      }
    }
    if(flag==0){
      res.status(200).send("Item not present");
    }
    await cart.save();
    res.status(200).send(cart);
  }catch(error){
  }
});

module.exports ={ CartRouter};
   