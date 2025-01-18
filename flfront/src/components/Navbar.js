import React from "react";
import imageicon from "../assets/icon.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../Utils/TokenSlice";
import { Link, useNavigate } from "react-router";
import { IoCartOutline } from "react-icons/io5";
function Header() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const firstName = useSelector((state) => state.auth.firstName);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const  totalFrequency=useSelector((state)=>state.cart.totalFrequency)
  const logoutButton =()=>{
// call the reducer funciton
dispatch(logout());
navigate('/login');
  }
  return (
    <>
      <div className=" flex justify-between items-center bg-cyan-200 rounded-lg">
        <div className="flex items-center">
          <img className=" size-24" src={imageicon} alt="ICON is here" />
          <p>Welcome to FoodLog</p>
        </div>
        <div className="flex ">
          <button className="  px-4 ">
            {isAuthenticated ? <>Hii {firstName}</> : <>Please Login </>}
          </button>
          <button className=" px-4">Chat with chatgpt</button>
          <div className="relative w-8">
            <div className="absolute bg-red-500 text-white top-0 right-0 -mt-4 -mr-1 rounded-full p-1 ">
              {totalFrequency}
            </div>
            <Link to={"/cart"}>
              <IoCartOutline className="size-6" />
            </Link>
          </div>

          <button className=" px-4" onClick={logoutButton}>
            {isAuthenticated ? <>Logout</> : <>Login </>}
          </button>
        </div>
      </div>
    </>
  );
}
export default Header;
