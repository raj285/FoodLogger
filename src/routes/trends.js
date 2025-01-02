const express = require("express");
const trendsRouter = express.Router();
const jwt = require("jsonwebtoken");
const { foodLogModel } = require("../model/FoodLogItems");
const { Nutrients } = require("../model/Nutrients");
const { weightModel } = require("../model/Weight");
trendsRouter.get("/trends", async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const token =
      req.headers.authorization?.split(" ")[1] || req.cookies?.token;

    // Check if token is missing
    if (!token) {
      return res.status(401).json({ message: "Token is required." });
    }

    // Verify the token and extract userId
    let userId;
    try {
      const decodedToken = jwt.verify(token, "*MARIJ9-e-9ishq#");
      // console.log(decodedToken)
      userId = decodedToken._id;
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired token." });
    }
    // console.log(token);
    // console.log(startDate + " and " + endDate);
    // console.log(userId);
    // Validate the presence of startDate and endDate
    if (!startDate || !endDate) {
      return res
        .status(400)
        .json({ message: "startDate and endDate are required." });
    }
    const foodLogData = await foodLogModel.find({
      userId,
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const nutrientsData = await Nutrients.find({
      userId,
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const weightData = await weightModel.find({
      userId,
      createdAt: { $gte: startDate, $lte: endDate },
    });
    const sumOfNutrientsData = {
      userId,
      calories: 0,
      nutrients: {
        proteins: {
          cystine: 0,
          histidine: 0,
          isoleucine: 0,
          leucine: 0,
          lysine: 0,
          methionine: 0,
          phenylalanine: 0,
          threonine: 0,
          tryptophan: 0,
          tyrosine: 0,
          valine: 0,
        },
        minerals: {
          calcium: 0,
          iron: 0,
          potassium: 0,
          sodium: 0,
          magnesium: 0,
          phosphorus: 0,
          zinc: 0,
          copper: 0,
          selenium: 0,
          manganese: 0,
        },
        vitamins: {
          vitaminA: 0,
          vitaminB1: 0,
          vitaminB2: 0,
          vitaminB3: 0,
          vitaminB5: 0,
          vitaminB6: 0,
          vitaminK: 0,
          folate: 0,
          vitaminB12: 0,
          vitaminC: 0,
          vitaminD: 0,
          vitaminE: 0,
        },
        carbohydrates: {
          carbs: 0,
          Addedsucrose: 0,
          sucrose: 0,
          starch: 0,
          fiber: 0,
          NetCarbs: 0,
        },
        Lipids: {
          Fat: 0,
          Monounsaturated: 0,
          polyunsaturated: 0,
          omega3: 0,
          omega6: 0,
          saturated: 0,
          TransFat: 0,
          cholestrol: 0,
        },
      },
    };
    nutrientsData.forEach((element) => {
      sumOfNutrientsData.userId = element.userId;
      sumOfNutrientsData.calories += element.calories;
      for (
        let i = 0;
        i < Object.keys(sumOfNutrientsData.nutrients.proteins).length;
        i++
      ) {
        sumOfNutrientsData.nutrients.proteins[
          Object.keys(sumOfNutrientsData.nutrients.proteins)[i]
        ] +=
          element.nutrients.proteins[
            Object.keys(element.nutrients.proteins)[i]
          ];
      }
      for (
        let i = 0;
        i < Object.keys(sumOfNutrientsData.nutrients.minerals).length;
        i++
      ) {
        sumOfNutrientsData.nutrients.minerals[
          Object.keys(sumOfNutrientsData.nutrients.minerals)[i]
        ] +=
          element.nutrients.minerals[
            Object.keys(element.nutrients.minerals)[i]
          ];
      }
      for (
        let i = 0;
        i < Object.keys(sumOfNutrientsData.nutrients.vitamins).length;
        i++
      ) {
        sumOfNutrientsData.nutrients.vitamins[
          Object.keys(sumOfNutrientsData.nutrients.vitamins)[i]
        ] +=
          element.nutrients.vitamins[
            Object.keys(element.nutrients.vitamins)[i]
          ];
      }
      for (
        let i = 0;
        i < Object.keys(sumOfNutrientsData.nutrients.carbohydrates).length;
        i++
      ) {
        sumOfNutrientsData.nutrients.carbohydrates[
          Object.keys(sumOfNutrientsData.nutrients.carbohydrates)[i]
        ] +=
          element.nutrients.carbohydrates[
            Object.keys(element.nutrients.carbohydrates)[i]
          ];
      }
      for (
        let i = 0;
        i < Object.keys(sumOfNutrientsData.nutrients.Lipids).length;
        i++
      ) {
        sumOfNutrientsData.nutrients.Lipids[
          Object.keys(sumOfNutrientsData.nutrients.Lipids)[i]
        ] += element.nutrients.Lipids[Object.keys(element.nutrients.Lipids)[i]];
      }
    });
    // console.log(nutrientsData);
    // console.log(weightData);
    // console.log(foodLogData);
    // console.log(sumOfNutrientsData);
    res.status(200).json({
      message: "Data fetched successfully",
      foodLogData,
      nutrientsData: sumOfNutrientsData,
      weightData,
    });
  } catch (error) {
    res.status(404).send({ message: `Something went wrong: ${error.message}` });
  }
});
module.exports = trendsRouter;
