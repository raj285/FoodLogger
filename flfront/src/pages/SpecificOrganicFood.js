import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const SpecificOrganicFood = () => {
    const {id}=useParams();
    const [foodData, setFoodData] = useState(null);
    useEffect(() => {
      const specificFoodData=async()=>{
        const res = await axios.get(
          "http://localhost:8080/organicFoodInCart",
          {
            params: { _id: id },
          }
        );
        console.log(res.data);
        setFoodData(res.data);
        
      }
      specificFoodData();
    }, [])
     if (!foodData) {
       return <div>Loading...</div>;
     }
    
  return (
    <div>
      <img src={foodData.imagelink} alt="Photu was here" />
      <h1>{foodData.name}</h1>
      <h1>{foodData.nutritionalInfo}</h1>
      <h1>{foodData.price}</h1>
      <h4>{foodData.weight}</h4>
      <h4>{foodData.discount}</h4>
      <h3>{foodData.description}</h3>
      <Link to={'/'}>khrid mere ko bc</Link>
    </div>
  );
}

export default SpecificOrganicFood
