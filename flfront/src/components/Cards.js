import React from 'react'
import { Link } from 'react-router-dom';
const Cards = ({
  name,
  description,
  discount,
  imagelink,
  nutritionalInfo,
  price,
  weight,
  _id
}) => {
  return (
    <div className=" relative border  border-black rounded-lg flex-wrap w-5/12  m-2 h-1/2 ">
      <div className='bg-red-600 text-white rounded-3xl p-1 absolute top-0 right-0 -mr-1 -mt-2 '>-{discount}%</div>
      <img
        className=" rounded-lg mx-auto  h-52"
        src={imagelink}
        alt="Photu was here"
      />
      <h1>{name}</h1>
      <div className="flex">
        <div className="mx-1">₹{price}</div>
        <div className="line-through text-gray-300 mx-1">
          ₹{(price / (1 - discount / 100)).toFixed(2)}
        </div>
      </div>
      <div>{weight} gram</div>
      <div>Rate is ₹{(price / weight) * 1000}</div>    
        
      <Link to={`/organicFoods/${_id}`}>khrid mere ko bc</Link>
    </div>
  );
}

export default Cards
