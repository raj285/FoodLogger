const mongoose=require('mongoose');
//  making schema of admins 

const adminSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    }
},{timestamps:true})
const adminModel=mongoose.model('admin',adminSchema);
module.exports={adminModel}; 