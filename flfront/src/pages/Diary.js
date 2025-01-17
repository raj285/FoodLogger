import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import TrendsCards from "../components/TrendsCards";
import { IoChevronBackCircle } from "react-icons/io5";
import { IoChevronForwardCircle } from "react-icons/io5";

const Diary = () => {
  const token = useSelector((state) => state.auth.token);
  const [foodDataArray, setfoodDataArray] = useState([]);
  const [tableVisibilty, settableVisibilty] = useState(false);
  const [quantityTableVisibility, setquantityTableVisibility] = useState(false);
  const [idOfAddedFood, setidOfAddedFood] = useState("");
  const [quantityOfFood, setquantityOfFood] = useState(0);
  const [typeOfQuantity, settypeOfQuantity] = useState("kg");
  const addfood = async () => {
    const res = await axios.get("http://localhost:8080/fooddiary");
    console.log(res);
    setfoodDataArray(res?.data?.foodData);
    console.log("diary data is " + foodDataArray[0].name);
    settableVisibilty(true);
  };
  const diaryEntryFunction = (a, b, c) => {
    setidOfAddedFood(a);
    settypeOfQuantity(b === 0 ? "kg" : "ml");
    setquantityTableVisibility(true);
  };
  const finalCall = async () => {
    console.log(idOfAddedFood);
    console.log("snd");
    console.log(quantityOfFood);
    try {
      const res1 = await axios.post(
        `http://localhost:8080/dairyEntry`,
        {
          idOfAddedFood,
          quantityOfFood,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res1);
      if (res1.status === 200) {
        toast.success(res1.data);
      }
    } catch (error) {
      toast.error("OOPS!!! something went wrong " + error.response.data);
    }
    settableVisibilty(false);
    setquantityTableVisibility(false);
  };
  const xClickedParent = () => {
    settableVisibilty(false);
  };
  const xClickedChild = () => {
    setquantityTableVisibility(false);
  };
  const backward = () => {
    const x = new Date(startDate);
    x.setDate(x.getDate() - 1);
    setStartDate(x.toISOString().split("T")[0]);
    const y = new Date(endDate);
    y.setDate(y.getDate() - 1);
    setEndDate(y.toISOString().split("T")[0]);
  };
  const forward = () => {
    const x = new Date(startDate);
    x.setDate(x.getDate() + 1);
    setStartDate(x.toISOString().split("T")[0]);
    const y = new Date(endDate);
    y.setDate(y.getDate() + 1);
    setEndDate(y.toISOString().split("T")[0]);
  };
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const todayInString = today.toISOString().split("T")[0];
  const tomorrowInStrng = tomorrow.toISOString().split("T")[0];
  const [startDate, setStartDate] = useState(todayInString);
  const [endDate, setEndDate] = useState(tomorrowInStrng);

  return (
    <div className="m-2 w-full">
      <div className="flex  justify-evenly">
        <button className="hover:bg-white hover:text-black" onClick={backward}>
          <IoChevronBackCircle />
        </button>
        <div>{startDate}</div>
        <button className="hover:bg-white hover:text-black" onClick={forward}>
          <IoChevronForwardCircle />
        </button>
      </div>

      <button
        onClick={addfood}
        className=" m-2 p-1 border-2 rounded-md hover:bg-gray-700 hover:text-white"
      >
        🍗Add food +
      </button>
      <button className=" m-2 p-1 border-2 rounded-md hover:bg-gray-700 hover:text-white">
        Calorie Burnt today 🏃‍♂️ +
      </button>
      {tableVisibilty && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-900 rounded-md w-3/4 z-10 shadow-lg">
          <div className="flex justify-between bg-slate-700 text-white px-4">
            <h1 className="text-2xl  font-bold">Food Data</h1>
            <button onClick={xClickedParent} className="text-white">
              ✖
            </button>
          </div>

          {foodDataArray.map((element, index) => {
            return (
              <div
                key={element._id}
                className="flex justify-evenly items-center border border-black"
              >
                <div>{index + 1}</div>
                <div>{element.name}</div>
                <div>
                  {element.foodWeight === 0
                    ? `${element.foodVolume} ml`
                    : `${element.foodWeight} gm`}
                </div>
                <button
                  onClick={() =>
                    diaryEntryFunction(
                      element._id,
                      element.foodVolume,
                      element.foodWeight
                    )
                  }
                  className=" m-1 p-1 border-2 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  add it
                </button>
              </div>
            );
          })}
        </div>
      )}
      {quantityTableVisibility && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-900 rounded-md  z-20 shadow-lg">
          <div className="flex justify-between bg-slate-700 text-white p-1">
            <h1>please enter quantity</h1>

            <button onClick={xClickedChild} className="text-white">
              ✖
            </button>
          </div>
          <div className="flex p-1 m-1">
            <input
              className="bg-slate-200"
              type="text"
              placeholder="please enter quantity"
              value={quantityOfFood}
              onChange={(e) => {
                setquantityOfFood(e.target.value);
              }}
            />
            <div>{typeOfQuantity}</div>
          </div>
          <button
            className=" m-2 p-1 border-2 rounded-md hover:bg-gray-700 hover:text-white"
            onClick={finalCall}
          >
            {" "}
            add it
          </button>
        </div>
      )}
      <TrendsCards startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default Diary;
