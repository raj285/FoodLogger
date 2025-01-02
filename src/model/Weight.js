const mongoose = require("mongoose");
const weightSchema = new mongoose.Schema(
    {
    userId: {
      type: String,
      required: true,
    },
    weight:{
        type:Number,
        required:true,
    }
},
{timestamps:true}
);

const weightModel = mongoose.model("weightTable", weightSchema);
module.exports = { weightModel };
