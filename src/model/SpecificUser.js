const mongoose=require ('mongoose');
const SUserSchema=new mongoose.Schema({
    CartItems:{
        type:Number,
        required:true,
    },
    SCartItems:{
        
    }
})
