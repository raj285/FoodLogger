import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import axios from 'axios'

const OrganicFoods = () => {
  const [fetchedData, setFetchedData] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/organicFood");
      console.log(res);
      console.log(res.data)
      setFetchedData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData(); 
}, []);
  return (
    <div>
      <div></div>
      <div className='flex flex-wrap p-3 m-3 justify-evenly'>
        {" "}
        {fetchedData.map((value) => {
          return <Cards {...value} key={value._id} />;
        })}
      </div>
    </div>
  );
}

export default OrganicFoods
