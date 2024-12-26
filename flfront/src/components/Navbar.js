import React from 'react'
import imageicon from'../assets/icon.png'
function Header() {
  return (
    <>
      <div className=" flex justify-between items-center bg-cyan-200 rounded-lg">
        <div className='flex items-center'>
          <img className=" size-24" src={imageicon} alt="ICON is here" />
          <p >Welcome to FoodLog</p>
        </div>
        <div>
          <button className="  px-4 ">Your Name</button>
          <button className=" px-4">Chat with chatgpt</button>
          <button className=" px-4">Logout</button>
        </div>
      </div>
    </>
  );
}
export default Header
