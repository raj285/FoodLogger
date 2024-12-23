const mongoose = require("mongoose");
// install slugify
// it changes space to -or_
const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    slug:{
        type:String,
        lowercase:true
    }
})
const categoryModel = mongoose.model("category", categorySchema);
module.exports = { categoryModel };