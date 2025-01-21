const express = require("express");
const { token } = require("morgan");
const { adminModel } = require("../model/admin");
const { organicModel } = require("../model/organicFood");
const jwt = require("jsonwebtoken");
const { foodItemsModel } = require("../model/foodItems");
const AdminRouter = express.Router(); 
// get if u are in admin
AdminRouter.get("/admin", async (req, res) => {
  try {
    // get data from the token
    // console.log(req.headers.authorization);
    const token =
      req.headers.authorization?.split(" ")[1] || req.cookies?.token;

    if (!token) {
      return res.status(401).json({ message: "Please login first" });
    }
    // console.log(token);
    const decodedToken = jwt.verify(token, "*MARIJ9-e-9ishq#");
    // console.log(decodedToken);
    userId = decodedToken._id;
    // console.log(userId); 
    const data = await adminModel.find({ id: userId }); 
    console.log(data);
    if (data.length===0) {
      res.status(200).send(false);
      // throw new Error("You are not admin ,please register yourself as admin");
    }
    res.status(200).send(true);
  } catch (error) {}
});
// if not add yourself
AdminRouter.post("/registerAdmin", async (req, res) => {
  try {
    // get data from the token
    const token =
      req.headers.authorization?.split(" ")[1] || req.cookies?.token;
      console.log("token hai "+token);
    if (!token) {
      throw new Error("Please login First");
    }
    const decodedToken = jwt.verify(token, "*MARIJ9-e-9ishq#");
    userId = decodedToken._id;
    const dataForSchema = {
      id: userId,
    };
    const data = new adminModel(dataForSchema);
    await data.save();
    res.status(200).send("Congratulations!!!🎉🎉 you are now an admin...");
  } catch (error) {
    res.status(404).send({ message: `Something went wrong: ${error.message}` });
  }
}); 

// add organic foods
AdminRouter.post("/addOrganicFoods", async (req, res) => {
  try {
    const data = req.body;
    const token=req.headers.authorization.split(" ")[1];
        if (!token) {
          return res.status(401).json({ message: "Please login first" });
        }
        // console.log(token);
        const decodedToken = jwt.verify(token, "*MARIJ9-e-9ishq#");
        // console.log(decodedToken);
        userId = decodedToken._id;
        data.id=userId;
    if (!data) {
      throw new Error("please send valid data");
    }
    const dataInSchema = await organicModel(data);
    await dataInSchema.save();
    res.status(200).send("added succcesfully");
  } catch (error) {
    res.status(404).send({ message: `Something went wrong: ${error.message}` });
  }
});

// add food items
AdminRouter.post("/foodItemsEntry", async (req, res) => {
  try {
    const data = new foodItemsModel(req.body);
    const t = await data.save();
    res.send("data updated successfully");
  } catch (error) {
    res.send("OOPS....Something Went Wrong !!!! " + error);
  }
});
module.exports = { AdminRouter };
