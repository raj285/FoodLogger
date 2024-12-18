const express = require("express");
const dotenv = require("dotenv");
const { main } = require("./config/database.js");
const {User}=require('./model/User.js');
main();
const app = express();
dotenv.config();
app.use(express.json());
app.post('/signup',async (req,res)=>{
  try {
    console.log("mai kaam kr rha hun bc")
    let data=new User(req.body);
    console.log(data);
    await data.save();
    res.send("signed up successfully");
  } catch (error) {
    res.send(`something went wrong : ${error}`);
  }
})
app.get('/login', async(req,res)=>{
  try {
    let data=req.body;
    
  } catch (error) {
    
  }
})
let PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
  try {
    console.log(`server running on ${PORT}`);
  } catch (error) {
    console.error("Something went wrong " + error);
  }
});
