const express = require("express");
const entryRouter = express.Router();
const { User } = require("../model/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { isValidSignUpData } = require("../utils/validation.js");
// signup
entryRouter.post("/signup", async (req, res) => {
  try {
    isValidSignUpData(req.body);
    let data = new User(req.body);
    const { emailId } = data;
    if (await User.findOne({ emailId })) {
      res.send("User already exist ,Please login");
    } else {
      let myPlaintextPassword = data.password;
      data.password = await bcrypt.hash(myPlaintextPassword, 12);
      await data.save();
      res.send("signed up successfully");
    }
  } catch (error) {
    res.send(`something went wrong : ${error}`);
  }
});
//login
entryRouter.get("/login", async (req, res) => {
  try {
    let { emailId, password } = req.body;
    const findByEmail = await User.findOne({ emailId });
    if (!findByEmail) {
      throw new Error("INVALID CREDENTIAL....enter data correctly");
    }
    const isValidPassword = await bcrypt.compare(
      password,
      findByEmail.password
    );
    if (!isValidPassword) {
      throw new Error("INVALID CREDENTIALS....enter data correctly");
    }
    const token = await jwt.sign({ _id: findByEmail._id }, "*MARIJ9-e-9ishq#", {
      expiresIn: "1h",
    });
    res.cookie("token", token);
    res.send("logged In successfully");
  } catch (error) {
    res.status(404).send(`something went wrong: ${error}`);
  }
});
//logout
entryRouter.get("/logout", async (req, res) => {
  try {
    res.clearCookie("token");
    res.send("logged out succesfully");
  } catch (error) {
    res.status(404).send("something went wrong " + error);
  }
});
module.exports = entryRouter;
