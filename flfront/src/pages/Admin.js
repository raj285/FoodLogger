import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Admin = () => {
  const token = useSelector((state) => state.auth.token);
  const sellerName = useSelector((state) => state.auth.firstName);
  const [answer, setAnswer] = useState(false);
  const [organicFoodBox, setOrganicFoodBox] = useState(false);
  const [foodItemsBox, setFoodItemsBox] = useState(false);
  const [imagelink, setImagelink] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [description, setDescription] = useState("");
  const [nutritionalInfo, setNutritionalInfo] = useState("");
  // console.log(token);
  // let data;
  const changeTheModeOforOrgMode = () => {
    setOrganicFoodBox(true);
  };
  const handleSubmit = async () => {
    const SubmiitingTheOrgData = await axios.post(
      "http://localhost:8080/addOrganicFoods",
      {
        sellerName: sellerName,
        imagelink: imagelink,
        name: name,
        weight: weight,
        price: price,
        discount: discount,
        description: description,
        nutritionalInfo: nutritionalInfo,
      },
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      }
    );
    setOrganicFoodBox(false);
  };
  const registerTheUserAsAnAdmin = async () => {
    try {
      // Ensure the correct URL here, including any base path
      const response = await axios.post(
        `http://localhost:8080/registerAdmin`,
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setAnswer(true);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };
  const CrashTheOrg = () => {
    setOrganicFoodBox(false);
  };
  useEffect(() => {
    // querry parameter
    // let data = await axios.get(`http://localhost:8080/admin?token=${token}`);
    const adminGettingFunction = async () => {
      const dataCameFromReq = await axios.get(`http://localhost:8080/admin`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log({ dataCameFromReq });
      setAnswer(dataCameFromReq.data);
    };
    adminGettingFunction();
  });
  console.log(answer);
  if (answer === false) {
    return (
      <>
        {/* {token} */}
        <div>You are not an Admin ,Please register Yourself as an admin</div>
        <button onClick={registerTheUserAsAnAdmin}>Register as an admin</button>
      </>
    );
  } else if (answer === true) {
    return (
      <div>
        <div>
          <div className="flex ">
            {" "}
            <div>add some organic foodItems</div>
            <button onClick={changeTheModeOforOrgMode}>click me</button>
            {organicFoodBox && (
              <div className="border border-black rounded-3xl p-1 justify-center items-center fixed z-10 bg-slate-300">
                {" "}
                <div className="flex justify-evenly">
                  {" "}
                  <div>ENTER VALUES CORRECTLY</div>
                  <button onClick={CrashTheOrg}>❌</button>
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Image Link"
                    value={imagelink}
                    onChange={(e) => setImagelink(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Weight (in grams)"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    placeholder="Discount (in %)"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value))}
                  />
                  <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <textarea
                    placeholder="Nutritional Information"
                    value={nutritionalInfo}
                    onChange={(e) => setNutritionalInfo(e.target.value)}
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            )}
          </div>
          <div className="flex">
            {" "}
            <div>add some food items</div>
            <button>click me</button>
            {/* {
              <div className="border border-black rounded-3xl p-1 justify-center items-center fixed z-10 bg-slate-300">
            } */}
          </div>
        </div>
      </div>
    );
  }
};

export default Admin;
