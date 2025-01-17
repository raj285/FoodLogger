import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";
import TrendsCards from "../components/TrendsCards";

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
      // dashArray: [5, 5], // Dashed line style
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
const CaloriesChart = () => {};

const Trends = () => {
  const [Weight, setWeight] = useState(null);
  // When working with ISO 8601 date strings (e.g., 2025-01-13T10:30:00.000Z), the date and time parts are separated by a "T".
  //  By using split("T"), you can isolate the date (2025-01-13) from the time (10:30:00.000Z).
  const today = new Date();
  const todayString = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD

  // Get the date 7 days back
  const sevenDaysBack = new Date();
  sevenDaysBack.setDate(today.getDate() - 7);
  const sevenDaysBackString = sevenDaysBack.toISOString().split("T")[0]; // Format as YYYY-MM-DD

  // Set the initial states
  const [startDate, setStartDate] = useState(sevenDaysBackString);
  const [endDate, setEndDate] = useState(todayString);

  // Convert string dates into Date objects
  const start = new Date(startDate);
  const end = new Date(endDate);
  // Calculate the difference in milliseconds
  const totalMilliseconds = end - start;
  // Convert milliseconds to days
  const totalDays = totalMilliseconds / (1000 * 60 * 60 * 24);

  return (
    <div className="bg-MainPage1">
      {/* input of dates */}
      <div>
        <div className="text-white  text-4xl flex justify-center">
          Trends of last {totalDays} days
        </div>
        <div className="flex justify-evenly py-1">
          <div className="flex bg-white rounded-lg p-2">
            <div className="m-1">from</div>
            <input
              type="date"
              placeholder="YYYY-MM-DD"
              key={1}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex bg-white rounded-lg p-2">
            <div className="m-2">to </div>
            <input
              type="date"
              placeholder="YYYY-MM-DD"
              key={startDate}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* boxes for trends */}
      <TrendsCards startDate={startDate} endDate={endDate} />
      <MyChart Weight={Weight} />
      {/* <button onClick={gettingData}>Click Me</button> */}
      {/* <div>
        {Data === null ? (
          `No data found`
        ) : (
          <>
            <div>{Data.calories}</div>
            <div>{Data.nutrients.proteins.cystine}</div>
          </>
        )}
      </div> */}
    </div>
  );
};

export default Trends;
