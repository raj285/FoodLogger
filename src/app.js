//importing
const express = require("express");
const dotenv = require("dotenv");
const { main } = require("./config/database.js");
const morgan=require('morgan');
const entryRouter=require('./routes/entry.js');
const cookieParser = require("cookie-parser");
const profileRouter = require("./routes/profile.js");
// middlewares
main();
const app = express();
dotenv.config();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/',entryRouter);
app.use('/',profileRouter);
// linking
let PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
  try {
    console.log(`server running on ${PORT}`);
  } catch (error) {
    console.error("Something went wrong " + error);
  }
});
