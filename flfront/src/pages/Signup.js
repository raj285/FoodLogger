import React from "react";
import icon from "../assets/icon.png";
import { Link } from "react-router";
const Signup = () => {
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
          <input />
          <p className=" flex justify-center">lastName</p>
          <input />
          <p className=" flex justify-center">emailId</p>
          <input />
          <p className=" flex justify-center">password</p>
          <input />
          <p className=" flex justify-center">age</p>
          <input />
          <p className=" flex justify-center">weight</p>
          <input />
          <p className=" flex justify-center">height</p>
          <input />
          <p className=" flex justify-center">gender</p>
          <input />
          <p className=" flex justify-center">admin</p>
          <input />
          <br/>
          <Link className="flex justify-center" to={"/login"}>already a user?</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
