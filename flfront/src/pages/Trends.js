import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";

const Trends = () => {
  const [startDate, setStartDate] = useState("2024-12-15");
  const [endDate, setEndDate] = useState("2025-01-03");
  const [Data, setData] = useState(null);
  const [Weight, setWeight] = useState(null);
  const token = useSelector((state) => state.auth.token);

  const gettingData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/trends", {
        headers: {
          authorization: `Bearer ${token}`,
        },
        params: {
          startDate,
          endDate,
        },
      });

      // Log the response data for debugging or confirmation
      console.log(res);
      console.log("Fetched Data:", res?.data);
      setData(res.data.nutrientsData);
      setWeight(res?.data?.weightData);
      if (res.status === 200) {
        toast.success("Successfully fetched the data");
      }
    } catch (error) {
      // Display a user-friendly error message
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while fetching data.";
      console.error("Error:", errorMessage);
      toast.error(errorMessage);
    }
  };

   const chartOptions = {
     chart: {
       type: "line",
       zoom: {
         enabled: false,
       },
     },
     stroke: {
       curve: "smooth",
       width: 3,
       dashArray: [5, 5], // Dashed line style
     },
     title: {
       text: "Dotted Line Chart Example",
       align: "left",
     },
     xaxis: {
       name: "Weight",
       data: Weight ? Weight.map((item) => item.createdAt) : [],
       // Replace `weight` with the correct field
       title: {
         text: "Months",
       },
     },
     yaxis: {
       title: {
         text: "Values",
       },
     },
     tooltip: {
       enabled: true,
     },
     markers: {
       size: 5,
       hover: {
         size: 7,
       },
     },
   };

   const chartSeries = [
     {
       name: "Data Series 1",
       data: [10, 20, 15, 30, 25, 35, 20],
     },
     {
       name: "Data Series 2",
       data: [15, 25, 20, 35, 30, 40, 25],
     },
   ];
  return (
    <>
      <div>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="line"
          height={350}
        />
      </div>
      <button onClick={gettingData}>Click Me</button>
      <div>
        {Data === null ? (
          `nhi mila kuchh`
        ) : (
          <>
            <div>{Data.calories}</div>
            <div>{Data.nutrients.proteins.cystine}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Trends;
