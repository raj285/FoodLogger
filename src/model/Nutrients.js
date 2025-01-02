const mongoose = require("mongoose");

const nutrientSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
      min: 0,
    },
    nutrients: {
      proteins: {
        cystine: { type: Number, min: 0, required: true, default: 0 },
        histidine: { type: Number, min: 0, required: true, default: 0 },
        isoleucine: { type: Number, min: 0, required: true, default: 0 },
        leucine: { type: Number, min: 0, required: true, default: 0 },
        lysine: { type: Number, min: 0, required: true, default: 0 },
        methionine: { type: Number, min: 0, required: true, default: 0 },
        phenylalanine: { type: Number, min: 0, required: true, default: 0 },
        threonine: { type: Number, min: 0, required: true, default: 0 },
        tryptophan: { type: Number, min: 0, required: true, default: 0 },
        tyrosine: { type: Number, min: 0, required: true, default: 0 },
        valine: { type: Number, min: 0, required: true, default: 0 },
      },
      minerals: {
        calcium: { type: Number, min: 0, required: true, default: 0 },
        iron: { type: Number, min: 0, required: true, default: 0 },
        potassium: { type: Number, min: 0, required: true, default: 0 },
        sodium: { type: Number, min: 0, required: true, default: 0 },
        magnesium: { type: Number, min: 0, required: true, default: 0 },
        phosphorus: { type: Number, min: 0, required: true, default: 0 },
        zinc: { type: Number, min: 0, required: true, default: 0 },
        copper: { type: Number, min: 0, required: true, default: 0 },
        selenium: { type: Number, min: 0, required: true, default: 0 },
        manganese: { type: Number, min: 0, required: true, default: 0 },
      },
      vitamins: {
        vitaminA: { type: Number, min: 0, required: true, default: 0 },
        vitaminB1: { type: Number, min: 0, required: true, default: 0 },
        vitaminB2: { type: Number, min: 0, required: true, default: 0 },
        vitaminB3: { type: Number, min: 0, required: true, default: 0 },
        vitaminB5: { type: Number, min: 0, required: true, default: 0 },
        vitaminB6: { type: Number, min: 0, required: true, default: 0 },
        vitaminK: { type: Number, min: 0, required: true, default: 0 },
        folate: { type: Number, min: 0, required: true, default: 0 },
        vitaminB12: { type: Number, min: 0, required: true, default: 0 },
        vitaminC: { type: Number, min: 0, required: true, default: 0 },
        vitaminD: { type: Number, min: 0, required: true, default: 0 },
        vitaminE: { type: Number, min: 0, required: true, default: 0 },
      },
      carbohydrates: {
        carbs: { type: Number, min: 0, required: true, default: 0 },
        Addedsucrose: { type: Number, min: 0, required: true, default: 0 },
        sucrose: { type: Number, min: 0, required: true, default: 0 },
        starch: { type: Number, min: 0, required: true, default: 0 },
        fiber: { type: Number, min: 0, required: true, default: 0 },
        NetCarbs: { type: Number, min: 0, required: true, default: 0 },
      },
      Lipids: {
        Fat: { type: Number, min: 0, required: true, default: 0 },
        Monounsaturated: { type: Number, min: 0, required: true, default: 0 },
        polyunsaturated: { type: Number, min: 0, required: true, default: 0 },
        omega3: { type: Number, min: 0, required: true, default: 0 },
        omega6: { type: Number, min: 0, required: true, default: 0 },
        saturated: { type: Number, min: 0, required: true, default: 0 },
        TransFat: { type: Number, min: 0, required: true, default: 0 },
        cholestrol: { type: Number, min: 0, required: true, default: 0 },
      },
    },
  },
  { timestamps: true }
);

const Nutrients = mongoose.model("Nutrients", nutrientSchema);
module.exports = { Nutrients };
