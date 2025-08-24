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
      // console.log(res.data);
      setFoodData(res.data); 
    };
    specificFoodData(); 
  }, [id]);

  const handleAddToCart = () => {
        if (foodData) {
          dispatch(addItem(foodData)); // Add the current foodData to the cart
        } else {
          // Optional: You could add a toast or alert to inform the user
          console.log("Food data not loaded yet. Please wait.");
        }
  };
  if (!foodData) {
    return <div>Loading...</div>;
  }
// console.log("image link is"+foodData.imagelink)
  return (
    <div>
      <img src={foodData.imagelink} alt="Photu was here" />
      <h1>{foodData.name}</h1>
      <h1>{foodData.nutritionalInfo}</h1>
      <h1>{foodData.price}</h1>
      <h4>{foodData.weight}</h4>
      <h4>{foodData.discount}</h4>
      <h3>{foodData.description}</h3>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
}

export default SpecificOrganicFood
