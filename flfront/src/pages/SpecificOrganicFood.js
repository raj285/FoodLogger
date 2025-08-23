import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { addItem } from '../Utils/CartSlice';
import {useDispatch} from "react-redux";
const SpecificOrganicFood = () => {
  const { id } = useParams();
  const [foodData, setFoodData] = useState(null);
  const dispatch = useDispatch(); // Initialize the dispatcher
  useEffect(() => {
    const specificFoodData = async () => {
      const res = await axios.get("http://localhost:8080/organicFoodInCart", {
        params: { _id: id },
      });
      console.log(res.data);
      setFoodData(res.data); 
    };
    specificFoodData(); 
  }, []);
  const handleAddToCart = () => {
    dispatch(addItem(foodData)); // Add the current foodData to the cart
  };
  if (!foodData) {
    return <div>Loading...</div>;
  }
console.log("image link is"+foodData.imagelink)
  return (
    <div>
      <img src={foodData.imagelink} alt="Photu was here" />
      <h1>{foodData.name}</h1>
      <h1>{foodData.nutritionalInfo}</h1>
      <h1>{foodData.price}</h1>
      <h4>{foodData.weight}</h4>
      <h4>{foodData.discount}</h4>
      <h3>{foodData.description}</h3>
      <Link to={"/cart"} onClick={handleAddToCart}>Add to Cart</Link>
    </div>
  );
}

export default SpecificOrganicFood
