const mongoose = require("mongoose");
const main = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://goswamiraj2520:SRIpJ9pYficcpUYn@namastenode.wwp0s.mongodb.net/FoodLogger"
    );
  } catch (error) {
    console.error("something went wrong "+error);
  }
};
module.exports = { main };
