const mongoose = require("mongoose");
const main = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://goswamiraj2520:cQB0J3lztvMLXZbH@namastenode.wwp0s.mongodb.net/namaste-node?retryWrites=true&w=majority"
    );
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("something went wrong "+error);
  }
};
module.exports = { main };
