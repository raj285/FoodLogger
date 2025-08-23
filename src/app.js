//importing
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");


const { main } = require("./config/database.js");
const entryRouter=require('./routes/entry.js');
const profileRouter = require("./routes/profile.js");
const foodLogRouter = require("./routes/foodLog.js");
const trendsRouter = require("./routes/trends.js");
const paymentRouter = require("./routes/paymentGateway.js");
const organicRouter = require("./routes/organic.js"); 
const { AdminRouter } = require("./routes/admin.js");
const { CartRouter } = require("./routes/cartRoute.js");

//intialising the express app
const app = express(); 

//middlewares
app.use(express.json()); // For parsing JSON bodies
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded bodies
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());



main(); // database connection
app.use('/',entryRouter);
app.use('/',profileRouter);
app.use('/',foodLogRouter);
app.use('/',trendsRouter);
app.use('/',paymentRouter);
app.use('/',organicRouter);
app.use('/',AdminRouter);
app.use('/',CartRouter);



// linking
let PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
  try {
    console.log(`server running on ${PORT}`);
  } catch (error) {
    console.error("Something went wrong " + error);
  } 
});
