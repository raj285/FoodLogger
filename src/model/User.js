//  here we will create user schema
//  here we will validate the database
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 50,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
      trim: true,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    age: {
      type: Number,
      min: 12,
      max: 100,
    },
    weight: {
      type: Number,
      min: 35,
      max: 300,
    },
    height: {
      type: Number,
      max: 305,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    admin: {
      type: Number,
      required: true,
      enum: [0, 1],
      default: 0,
    },
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cart",
    },
  },
  { timestamps: true }
);


const User = mongoose.model("user", userSchema);
module.exports = { User };
