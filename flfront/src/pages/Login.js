import React, { useState } from "react";
import icon from "../assets/icon.png";
import { Link } from "react-router";
import toast from "react-hot-toast";
const Login = () => {
    const [emailId, setemailId] = useState(null);
    const [password, setpassword] = useState(null);
    const loginFunctionality=async ()=>{
        if(!emailId || !password){
            toast.error("please fill EmailId and Password");
            return;
        }
        try {
            await fetch("http://localhost:5000/api/login", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ emailId, password }),
            });
                        
        } catch (error) {
            toast.error("OOPS!!! something went wrong " + error);
        }

    }
  return (
    <div>
      <div className="flex justify-around bg-fuchsia-950">
        <img className=" size-20" src={icon} alt="icon for FoodLogger" />
        <p className=" text-5xl text-white flex items-center">FoodLogger</p>
      </div>
      <div className="flex justify-center min-h-screen items-center bg-gray-500">
        <div className="p-6 border-2 rounded shadow-2xl border-gray-900 bg-slate-100">
          <p className="flex justify-center text-2xl p-8">
            Welcome Back to FoodLog
          </p>
          <p className=" p-5 flex justify-center">emailId</p>
          <input
            className="w-full "
            type="emailId"
            placeholder="Your emailIdId Here"
            value={emailId} onChange={(e)=>{
                setemailId(e.target.value)
            }}
          />
          <p className="p-5 flex justify-center ">password</p>
          <input
            className="w-full"
            type="password"
            placeholder="Enter your password here"
            value={password}
            onChange={(e)=>{
                setpassword(e.target.value);
            }}
          />
          {/* here we have to add one possword visualiser */}
          <br />
          <div className="flex justify-center p-6">
            <button className="bg-green-800 rounded p-3 px-12 " onClick={loginFunctionality} >LOGIN</button>
          </div>
          <br />
          <div className="flex justify-center">
            <Link to="/forgotpassword">forgot your password</Link>
          </div>
          <br />
          <div className="flex justify-center">
            <Link to="/signup">Not a member</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
