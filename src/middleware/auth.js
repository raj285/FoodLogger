 const jwt=require("jsonwebtoken");
const {User} = require("../model/User");
const secret="*MARIJ9-e-9ishq#";


// middleware to verify token
const authenticateMiddleWare=async(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(" ")[1];
        if (!token) {
          return res.status(401).json({ message: "Please login first" });
        }
        // console.log(token);
        const decodedToken = jwt.verify(token, secret);
        const userId = decodedToken._id;
        // console.log("userId hai ye-> " + userId); 
        const user=await User.findById(userId);
        // console.log("user hai ye-> " + user);
        if(!user){
            return res.status(404).send("User not found");
        }
        req.user=user;
        next();
    } catch (error) {
        res.status(404).send({ message: `Something went wrong: ${error.message}` });
    }
};
module.exports={authenticateMiddleWare};