const express = require("express");
const dotenv = require("dotenv");
const { main } = require("./database.js");
main();
const app = express();
dotenv.config();

let PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
  try {
    console.log(`server running on ${PORT}`);
  } catch (error) {
    console.error("Something went wrong " + error);
  }
});
