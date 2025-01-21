const express = require("express");
const foodLogRouter = express.Router();
const jwt = require("jsonwebtoken");
const { foodLogModel } = require("../model/FoodLogItems");
const { Nutrients } = require("../model/Nutrients");
const { foodItemsModel } = require("../model/foodItems");
const { weightModel } = require("../model/Weight");
//entering data
foodLogRouter.post("/dairyEntry", async (req, res) => {
  try {
    const { idOfAddedFood, quantityOfFood } = req.body;
    const _id = idOfAddedFood;
    const quantity = quantityOfFood;
    // const token = req.cookies.token;
    const token=req.headers.authorization?.split(" ")[1] || req.cookies?.token;
    console.log(token);
    console.log("and")
    console.log(_id);
    console.log("and");
    console.log(quantity);
    if(!token){
      throw new Error("please login first");
    }
    const userId = await jwt.verify(token, "*MARIJ9-e-9ishq#");
    const nutrionalInformationPerCent = await foodItemsModel.findById(_id);
    if(quantity<=0){
      throw new Error("please mention a valid quantity")
    }
    if(!userId){
      throw new Error("Please Login First");
    }
    if(!nutrionalInformationPerCent){
      throw new Error("select foods correctlly");
    }
    const proportion = quantity / 100;
    const updatedNutrientsData = new Nutrients({
      userId: userId,
      calories: nutrionalInformationPerCent.calories * proportion,
      nutrients: {
        proteins: {
          cystine:
            nutrionalInformationPerCent.nutrients.proteins.cystine * proportion,
          histidine:
            nutrionalInformationPerCent.nutrients.proteins.histidine *
            proportion,
          isoleucine:
            nutrionalInformationPerCent.nutrients.proteins.isoleucine *
            proportion,
          leucine:
            nutrionalInformationPerCent.nutrients.proteins.leucine * proportion,
          lysine:
            nutrionalInformationPerCent.nutrients.proteins.lysine * proportion,
          methionine:
            nutrionalInformationPerCent.nutrients.proteins.methionine *
            proportion,
          phenylalanine:
            nutrionalInformationPerCent.nutrients.proteins.phenylalanine *
            proportion,
          threonine:
            nutrionalInformationPerCent.nutrients.proteins.threonine *
            proportion,
          tryptophan:
            nutrionalInformationPerCent.nutrients.proteins.tryptophan *
            proportion,
          tyrosine:
            nutrionalInformationPerCent.nutrients.proteins.tyrosine *
            proportion,
          valine:
            nutrionalInformationPerCent.nutrients.proteins.valine * proportion,
        },
        minerals: {
          calcium:
            nutrionalInformationPerCent.nutrients.minerals.calcium * proportion,
          iron:
            nutrionalInformationPerCent.nutrients.minerals.iron * proportion,
          potassium:
            nutrionalInformationPerCent.nutrients.minerals.potassium *
            proportion,
          sodium:
            nutrionalInformationPerCent.nutrients.minerals.sodium * proportion,
          phosphorus:
            nutrionalInformationPerCent.nutrients.minerals.phosphorus *
            proportion,
          magnesium:
            nutrionalInformationPerCent.nutrients.minerals.magnesium *
            proportion,
          zinc:
            nutrionalInformationPerCent.nutrients.minerals.zinc * proportion,
          copper:
            nutrionalInformationPerCent.nutrients.minerals.copper * proportion,
          selenium:
            nutrionalInformationPerCent.nutrients.minerals.selenium *
            proportion,
          manganese:
            nutrionalInformationPerCent.nutrients.minerals.manganese *
            proportion,
        },
        vitamins: {
          vitaminA:
            nutrionalInformationPerCent.nutrients.vitamins.vitaminA *
            proportion,
          vitaminB1:
            nutrionalInformationPerCent.nutrients.vitamins.vitaminB1 *
            proportion,
          vitaminB2:
            nutrionalInformationPerCent.nutrients.vitamins.vitaminB2 *
            proportion,
          vitaminB3:
            nutrionalInformationPerCent.nutrients.vitamins.vitaminB3 *
            proportion,
          vitaminB5:
            nutrionalInformationPerCent.nutrients.vitamins.vitaminB5 *
            proportion,
          vitaminB6:
            nutrionalInformationPerCent.nutrients.vitamins.vitaminB6 *
            proportion,
          vitaminK:
            nutrionalInformationPerCent.nutrients.vitamins.vitaminK *
            proportion,
          folate:
            nutrionalInformationPerCent.nutrients.vitamins.folate * proportion,
          vitaminB12:
            nutrionalInformationPerCent.nutrients.vitamins.vitaminB12 *
            proportion,
          vitaminC:
            nutrionalInformationPerCent.nutrients.vitamins.vitaminC *
            proportion,
          vitaminD:
            nutrionalInformationPerCent.nutrients.vitamins.vitaminD *
            proportion,
          vitaminE:
            nutrionalInformationPerCent.nutrients.vitamins.vitaminE *
            proportion,
        },
        carbohydrates: {
          carbs:
            nutrionalInformationPerCent.nutrients.carbohydrates.carbs *
            proportion,
          Addedsucrose:
            nutrionalInformationPerCent.nutrients.carbohydrates.Addedsucrose *
            proportion,
          sucrose:
            nutrionalInformationPerCent.nutrients.carbohydrates.sucrose *
            proportion,
          starch:
            nutrionalInformationPerCent.nutrients.carbohydrates.starch *
            proportion,
          fiber:
            nutrionalInformationPerCent.nutrients.carbohydrates.fiber *
            proportion,
          NetCarbs:
            nutrionalInformationPerCent.nutrients.carbohydrates.NetCarbs *
            proportion,
        },
        Lipids: {
          Fat: nutrionalInformationPerCent.nutrients.Lipids.Fat * proportion,
          Monounsaturated:
            nutrionalInformationPerCent.nutrients.Lipids.Monounsaturated *
            proportion,
          polyunsaturated:
            nutrionalInformationPerCent.nutrients.Lipids.polyunsaturated *
            proportion,
          omega3:
            nutrionalInformationPerCent.nutrients.Lipids.omega3 * proportion,
          omega6:
            nutrionalInformationPerCent.nutrients.Lipids.omega6 * proportion,
          saturated:
            nutrionalInformationPerCent.nutrients.Lipids.saturated * proportion,
          TransFat:
            nutrionalInformationPerCent.nutrients.Lipids.TransFat * proportion,
          cholestrol:
            nutrionalInformationPerCent.nutrients.Lipids.cholestrol *
            proportion,
        },
      },
    });
    await updatedNutrientsData.save();
    const calculation=(value)=>{
       if(value==="null"){
        return "null"
      }
      else{
        return quantity;
      }
    }
    const updateFoodLogData = new foodLogModel({
      userId: userId,
      foodName: nutrionalInformationPerCent.name,
      foodWeight: calculation(nutrionalInformationPerCent.foodWeight),
      FoodVolume: calculation(nutrionalInformationPerCent.FoodVolume),
    });
    await updateFoodLogData.save();
    res.send("Your food logged succesfully")
  } catch (error) {
    res.status(404).send("error came in logging food data "+error);
  }
});



foodLogRouter.post("/weightEntry",async(req,res)=>{
  try {
    const { weight } = req.body;
    const token = req.cookies.token;
    const userId = await jwt.verify(token, "*MARIJ9-e-9ishq#");
    const data = new weightModel({ weight: weight, userId: userId });
    const t=await data.save();
    res.send("data updates succesfully");
  } catch (error) {
    res.send("OOPs .something went wrong "+error);
  }
})
module.exports=foodLogRouter;