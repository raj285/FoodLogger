import React, { useState } from "react";
import icon from "../assets/icon.png";
import { Link} from "react-router";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router";
const Login = () => {
  let navigate=useNavigate();
  const [emailId, setemailId] = useState();
  const [password, setpassword] = useState();
  const loginFunctionality = async (e) => {
    if (!emailId || !password) {
      toast.error("please fill EmailId and Password");
      return;
    }

    try {
      const res = await axios.post(`http://localhost:8080/login`, {
        emailId,
        password,
      });
      if (res.status === 200) {
        toast.success(res.data);
        navigate("/dashboard");
      } else if (res.status === 404) {
        toast.error(res.data);
      }
    } catch (error) {
      toast.error("OOPS!!! something went wrong " + error.response.data);
    }
  };
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
            value={emailId}
            onChange={(e) => {
              setemailId(e.target.value);
            }}
            required
          />
          <p className="p-5 flex justify-center ">password</p>
          <input
            className="w-full"
            type="password"
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
          />
          {/* here we have to add one possword visualiser */}
          <br />
          <div className="flex justify-center p-6">
            <button
              className="bg-green-800 rounded p-3 px-12 "
              onClick={loginFunctionality}
            >
              LOGIN
            </button>
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
