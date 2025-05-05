//importing
const express = require("express");
const dotenv = require("dotenv");
const { main } = require("./config/database.js");
const morgan=require('morgan');
const entryRouter=require('./routes/entry.js');
const cookieParser = require("cookie-parser");
const profileRouter = require("./routes/profile.js");
const foodLogRouter = require("./routes/foodLog.js");
const trendsRouter = require("./routes/trends.js");
const cors =require("cors");
const paymentRouter = require("./routes/paymentGateway.js");
const organicRouter = require("./routes/organic.js"); 
const { AdminRouter } = require("./routes/admin.js");
// middlewares
main();
const app = express();
dotenv.config();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/',entryRouter);
app.use('/',profileRouter);
app.use('/',foodLogRouter);
app.use('/',trendsRouter);
app.use('/',paymentRouter);
app.use('/',organicRouter);
app.use('/',AdminRouter);
// linking
let PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
  try {
    console.log(`server running on ${PORT}`);
  } catch (error) {
    console.error("Something went wrong " + error);
  } 
});
