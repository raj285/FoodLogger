const validator = require("validator");
const isValidSignUpData = (data) => {
    const {
      firstName,
      lastName,
      emailId,
      password,
      gender,
    } = data;
    if(!validator.isEmail(emailId)){
        throw new Error("Enter Correct emailId")
    }
    if(!validator.isStrongPassword(password)){
        throw new Error("Enter Correct Password")
    }
    if(!validator.isLength(firstName,{ min: 2, max:30})){
        throw new Error("Enter Correct firstName")
    }
    if(!validator.isLength(lastName,{ min: 2, max: 30 })){
        throw new Error("Enter Correct lastName")
    }
    if (!validator.isIn(gender, ["Male", "Female", "others"])) {
      throw new Error("Enter Correct gender");
    }           
  return true;
};
module.exports={isValidSignUpData};
