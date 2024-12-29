import React, { useState } from "react";
import icon from "../assets/icon.png";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";
const Signup = () => {
  let navigate=useNavigate();
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [emailId, setemailId] = useState();
  const [password, setpassword] = useState();
  const [age, setage] = useState();
  const [weight, setweight] = useState();
  const [height, setheight] = useState();
  const [gender, setgender] = useState();
  const [admin, setadmin] = useState();

  const signupClicked = async () => {
    if (
      !firstName ||
      !lastName ||
      !emailId ||
      !password ||
      !age ||
      !weight ||
      !height ||
      !gender ||
      !admin
    ) {
      toast.error("Please fill all the datas");
    }
    try {
      const res = await axios.post(`http://localhost:8080/signup`, {
        firstName,
        lastName,
        emailId,
        password,
        age,
        gender,
        weight,
        height,
        admin,
      });
      console.log(res.data);
      if (res.status === 200) {
        toast.success(res.data);
        navigate('/login');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <div className="flex justify-around bg-fuchsia-950">
        <img className=" size-20" src={icon} alt="icon for FoodLogger" />
        <p className=" text-5xl text-white flex items-center">FoodLogger</p>
      </div>
      <div className=" flex h-screen items-center justify-center">
        <div className="p-4 rounded-lg shadow-2xl border-2  border-black bg-orange-100">
          <p className="text-xl">
            Please Signup to our site ...We promise u a tadakta bhadkta
            experience
          </p>
          <p className=" flex justify-center">FirstName</p>
          <input
            className="w-full"
            type="text"
            placeholder="Enter your first name here"
            value={firstName}
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
          />
          <p className=" flex justify-center">lastName</p>
          <input
            className="w-full"
            type="text"
            placeholder="Enter your last name here"
            value={lastName}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
          />
          <p className=" flex justify-center">emailId</p>
          <input
            className="w-full"
            type="emailId"
            placeholder="Enter your first name here"
            value={emailId}
            onChange={(e) => {
              setemailId(e.target.value);
            }}
          />
          <p className=" flex justify-center">password</p>
          <input
            className="w-full"
            type="password"
            placeholder="Enter your first name here"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <p className=" flex justify-center">age</p>
          <input
            className="w-full"
            placeholder=" emter your age here"
            value={age}
            type="number"
            onChange={(e) => {
              setage(e.target.value);
            }}
          />
          <p className=" flex justify-center">weight</p>
          <input
            className="w-full"
            type="number"
            placeholder="Enter your first name here"
            value={weight}
            onChange={(e) => {
              setweight(e.target.value);
            }}
          />
          <p className=" flex justify-center">height</p>
          <input
            className="w-full"
            type="number"
            placeholder="Enter your first name here"
            value={height}
            onChange={(e) => {
              setheight(e.target.value);
            }}
          />
          <p className=" flex justify-center">gender</p>
          <input
            className="w-full"
            type="text"
            placeholder="Enter your first name here"
            value={gender}
            onChange={(e) => {
              setgender(e.target.value);
            }}
          />
          <p className=" flex justify-center">admin</p>
          <input
            className="w-full"
            type="number"
            placeholder="Enter your first name here"
            value={admin}
            onChange={(e) => {
              setadmin(e.target.value);
            }}
          />
          <button
            className="flex justify-center bg-gray-700 text-white"
            onClick={signupClicked}
          >
            SignUp
          </button>
          <br />
          <Link className="flex justify-center" to={"/login"}>
            already a user?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
