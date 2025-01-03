import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";

const MyChart = ({ Weight }) => {
  // Process the data for chart
  const xAxisData = Weight
    ? Weight.map((item) => {
        const date = new Date(item.createdAt); // Convert string to Date object
        return date.toLocaleDateString(); // Format the date (you can customize the format as needed)
      })
    : [];

  const yAxisData = Weight ? Weight.map((item) => item.weight) : [];

  // Chart options configuration
  const chartOptions = {
    chart: {
      type: "line",
      zoom: {
        enabled: false, // Disable zoom
      },
    },
    stroke: {
      curve: "smooth", // Smooth line curve
      width: 3,
      dashArray: [5, 5], // Dashed line style
    },
    title: {
      text: "Weight vs Date",
      align: "left",
    },
    xaxis: {
      categories: xAxisData, // Categories for X-axis (dates)
      title: {
        text: "Date",
      },
    },
    yaxis: {
      title: {
        text: "Weight (kg)",
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

  // Chart series (weight values against the dates)
  const chartSeries = [
    {
      name: "Weight",
      data: yAxisData, // Weight data for the Y-axis
    },
  ];

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height="350"
      />
    </div>
  );
};

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
      console.log(Weight);
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

  return (
    <div>
      <MyChart Weight={Weight} />
      <button onClick={gettingData}>Click Me</button>
      <div>
        {Data === null ? (
          `No data found`
        ) : (
          <>
            <div>{Data.calories}</div>
            <div>{Data.nutrients.proteins.cystine}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Trends;
