import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
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
      const res1 = await axios.post(`http://localhost:8080/dairyEntry`, {
        idOfAddedFood,
        quantityOfFood,
      },{
        headers: {
          authorization: `Bearer ${token}`,
        },
      }); 
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
  return (
    <div className="m-2 w-full">
      <div>Date , to show which specific date</div>
      <button onClick={addfood}>Add food</button>
      {tableVisibilty && (
        <div className="border bg-white border-gray-900 rounded-md w-full z-10">
          <h1 className="text-2xl font-bold bg-slate-700 text-white px-4">
            Food Data
          </h1>
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
                >
                  add it
                </button>
              </div>
            );
          })}
        </div>
      )}
      {quantityTableVisibility && (
        <div className="flex justify-center items-center z-40">
          <div>please enter quantity</div>
          <input
            type="text"
            placeholder="please enter quantity"
            value={quantityOfFood}
            onChange={(e) => {
              setquantityOfFood(e.target.value);
            }}
          />
          <div>{typeOfQuantity}</div>
          <button onClick={finalCall}> add it</button>
        </div>
      )}
    </div>
  );
};

export default Diary;
