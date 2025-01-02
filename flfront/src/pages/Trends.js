import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";

const Trends = () => {
  const [startDate, setStartDate] = useState("2024-12-15");
  const [endDate, setEndDate] = useState("2025-01-03");

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
    <>
      <button onClick={gettingData}>Click Me</button>
    </>
  );
};

export default Trends;
