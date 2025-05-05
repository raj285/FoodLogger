//  we need user name to fetch everything about him
// username 
// username of product 
//  no. of piece
const mongoose=require("mongoose");
const CartSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    frequency:{
        type:Number,
        required:true,
    },
    productId:{
        type:String,
        required:true,
    }
},{timestamps:true})

const CartModel = mongoose.model("cart", CartSchema);
export default {CartModel};