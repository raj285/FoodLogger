const mongoose = require("mongoose");
const foodLogSchema = new mongoose.Schema(
  {
    foodName: {
      type: String,
      required: true,
    },
    foodWeight: {
      type: Number,
    },
    FoodVolume: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: "7d", // Automatically delete the document 7 days after creation
    },
  },
  { timestamps: true }
);

const foodLogModel = mongoose.model("foodLogTable", foodLogSchema);
module.exports = { foodLogModel };
