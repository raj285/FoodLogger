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
    <div  className="border border-black rounded-lg w-1/3 flex-wrap m-3">
      <img src={imagelink} alt="Photu was here" />
      <h1>{name}</h1>
      <h1>{nutritionalInfo}</h1>
      <h1>{price}</h1>
      <h4>{weight}</h4>
      <h4>{discount}</h4>
      <h3>{description}</h3>
      <Link to={`/organicFoods/${_id}`}>khrid mere ko bc</Link>
    </div>
  );
}

export default Cards
