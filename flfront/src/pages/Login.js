import React, { useState } from "react";
import icon from "../assets/icon.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../Utils/TokenSlice";
import { getCartData } from "../Utils/CartSlice";

const Login = () => {
  let navigate = useNavigate();
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  const loginFunctionality = async (e) => {
    e.preventDefault();
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
        dispatch(
          login({
            token: res.data.token,
            firstName: res.data.firstName,
          })
        );
        toast.success(res.data.message);
        dispatch(getCartData());
        navigate("/dashboard");
      } else if (res.status === 404) {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("OOPS!!! something went wrong " + error.response.data);
    }
  };

  return (
    // Your actual JSX code goes here, for example:
    <div className="login-container">
      <img src={icon} alt="App Icon" />
      <h2>Login</h2>
      <form onSubmit={loginFunctionality}>
        <input
          type="email"
          placeholder="Email"
          value={emailId}
          onChange={(e) => setemailId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Don't have an account? Sign up</Link>
    </div>
  );
};

export default Login;
