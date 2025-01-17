import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
const TrendsCards = ({ startDate, endDate }) => {
  const percentageCalculationOfNutrientsIntake = (
    totalDays,
    Nu,
    dailyIntake
  ) => {
    return ((Nu / (dailyIntake * totalDays)) * 100).toFixed(2);
  };
  // Convert string dates into Date objects
  const start = new Date(startDate);
  const end = new Date(endDate);
  // Calculate the difference in milliseconds
  const totalMilliseconds = end - start;
  // Convert milliseconds to days
  const totalDays = totalMilliseconds / (1000 * 60 * 60 * 24);
  const [Data, setData] = useState(null);

  const token = useSelector((state) => state.auth.token);
  const [Calories, setCalories] = useState(null);
  const [calcium, setCalcium] = useState(0);
  const [copper, setCopper] = useState(0);
  const [iron, setIron] = useState(0);
  const [magnesium, setMagnesium] = useState(0);
  const [manganese, setManganese] = useState(0);
  const [phosphorus, setPhosphorus] = useState(0);
  const [potassium, setPotassium] = useState(0);
  const [selenium, setSelenium] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [zinc, setZinc] = useState(0);
  const [cystine, setCystine] = useState(0);
  const [histidine, setHistidine] = useState(0);
  const [isoleucine, setIsoleucine] = useState(0);
  const [leucine, setLeucine] = useState(0);
  const [lysine, setLysine] = useState(0);
  const [methionine, setMethionine] = useState(0);
  const [phenylalanine, setPhenylalanine] = useState(0);
  const [threonine, setThreonine] = useState(0);
  const [tryptophan, setTryptophan] = useState(0);
  const [tyrosine, setTyrosine] = useState(0);
  const [valine, setValine] = useState(0);
  const [fat, setFat] = useState(0);
  const [monounsaturated, setMonounsaturated] = useState(0);
  const [transFat, setTransFat] = useState(0);
  const [cholesterol, setCholesterol] = useState(0);
  const [omega3, setOmega3] = useState(0);
  const [omega6, setOmega6] = useState(0);
  const [polyunsaturated, setPolyunsaturated] = useState(0);
  const [saturated, setSaturated] = useState(0);
  const [addedSucrose, setAddedSucrose] = useState(0);
  const [netCarbs, setNetCarbs] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fiber, setFiber] = useState(0);
  const [starch, setStarch] = useState(0);
  const [sucrose, setSucrose] = useState(0);
  const [folate, setFolate] = useState(0);
  const [vitaminA, setVitaminA] = useState(0);
  const [vitaminB1, setVitaminB1] = useState(0);
  const [vitaminB2, setVitaminB2] = useState(0);
  const [vitaminB3, setVitaminB3] = useState(0);
  const [vitaminB5, setVitaminB5] = useState(0);
  const [vitaminB6, setVitaminB6] = useState(0);
  const [vitaminB12, setVitaminB12] = useState(0);
  const [vitaminC, setVitaminC] = useState(0);
  const [vitaminD, setVitaminD] = useState(0);
  const [vitaminE, setVitaminE] = useState(0);
  const [vitaminK, setVitaminK] = useState(0);
  useEffect(() => {
    gettingData();
  },[startDate,endDate]);

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
      //   setWeight(res?.data?.weightData);
      setCalories(res?.data?.nutrientsData?.calories);
      setCalcium(res?.data?.nutrientsData?.nutrients?.minerals?.calcium || 0);
      setCopper(res?.data?.nutrientsData?.nutrients?.minerals?.copper || 0);
      setIron(res?.data?.nutrientsData?.nutrients?.minerals?.iron || 0);
      setMagnesium(
        res?.data?.nutrientsData?.nutrients?.minerals?.magnesium || 0
      );
      setManganese(
        res?.data?.nutrientsData?.nutrients?.minerals?.manganese || 0
      );
      setPhosphorus(
        res?.data?.nutrientsData?.nutrients?.minerals?.phosphorus || 0
      );
      setPotassium(
        res?.data?.nutrientsData?.nutrients?.minerals?.potassium || 0
      );
      setSelenium(res?.data?.nutrientsData?.nutrients?.minerals?.selenium || 0);
      setSodium(res?.data?.nutrientsData?.nutrients?.minerals?.sodium || 0);
      setZinc(res?.data?.nutrientsData?.nutrients?.minerals?.zinc || 0);
      setCystine(res?.data?.nutrientsData?.nutrients?.proteins?.cystine || 0);
      setHistidine(
        res?.data?.nutrientsData?.nutrients?.proteins?.histidine || 0
      );
      setIsoleucine(
        res?.data?.nutrientsData?.nutrients?.proteins?.isoleucine || 0
      );
      setLeucine(res?.data?.nutrientsData?.nutrients?.proteins?.leucine || 0);
      setLysine(res?.data?.nutrientsData?.nutrients?.proteins?.lysine || 0);
      setMethionine(
        res?.data?.nutrientsData?.nutrients?.proteins?.methionine || 0
      );
      setPhenylalanine(
        res?.data?.nutrientsData?.nutrients?.proteins?.phenylalanine || 0
      );
      setThreonine(
        res?.data?.nutrientsData?.nutrients?.proteins?.threonine || 0
      );
      setTryptophan(
        res?.data?.nutrientsData?.nutrients?.proteins?.tryptophan || 0
      );
      setTyrosine(res?.data?.nutrientsData?.nutrients?.proteins?.tyrosine || 0);
      setValine(res?.data?.nutrientsData?.nutrients?.proteins?.valine || 0);
      setFat(res?.data?.nutrientsData?.lipids?.fat || 0);
      setMonounsaturated(
        res?.data?.nutrientsData?.lipids?.monounsaturated || 0
      );
      setTransFat(res?.data?.nutrientsData?.lipids?.transFat || 0);
      setCholesterol(res?.data?.nutrientsData?.lipids?.cholesterol || 0);
      setOmega3(res?.data?.nutrientsData?.lipids?.omega3 || 0);
      setOmega6(res?.data?.nutrientsData?.lipids?.omega6 || 0);
      setPolyunsaturated(
        res?.data?.nutrientsData?.lipids?.polyunsaturated || 0
      );
      setSaturated(res?.data?.nutrientsData?.lipids?.saturated || 0);
      setAddedSucrose(
        res?.data?.nutrientsData?.nutrients?.carbohydrates?.addedSucrose || 0
      );
      setNetCarbs(
        res?.data?.nutrientsData?.nutrients?.carbohydrates?.netCarbs || 0
      );
      setCarbs(res?.data?.nutrientsData?.nutrients?.carbohydrates?.carbs || 0);
      setFiber(res?.data?.nutrientsData?.nutrients?.carbohydrates?.fiber || 0);
      setStarch(
        res?.data?.nutrientsData?.nutrients?.carbohydrates?.starch || 0
      );
      setSucrose(
        res?.data?.nutrientsData?.nutrients?.carbohydrates?.sucrose || 0
      );
      setFolate(res?.data?.nutrientsData?.nutrients?.vitamins?.folate || 0);
      setVitaminA(res?.data?.nutrientsData?.nutrients?.vitamins?.vitaminA || 0);
      setVitaminB1(
        res?.data?.nutrientsData?.nutrients?.vitamins?.vitaminB1 || 0
      );
      setVitaminB2(
        res?.data?.nutrientsData?.nutrients?.vitamins?.vitaminB2 || 0
      );
      setVitaminB3(
        res?.data?.nutrientsData?.nutrients?.vitamins?.vitaminB3 || 0
      );
      setVitaminB5(
        res?.data?.nutrientsData?.nutrients?.vitamins?.vitaminB5 || 0
      );
      setVitaminB6(
        res?.data?.nutrientsData?.nutrients?.vitamins?.vitaminB6 || 0
      );
      setVitaminB12(
        res?.data?.nutrientsData?.nutrients?.vitamins?.vitaminB12 || 0
      );
      setVitaminC(res?.data?.nutrientsData?.nutrients?.vitamins?.vitaminC || 0);
      setVitaminD(res?.data?.nutrientsData?.nutrients?.vitamins?.vitaminD || 0);
      setVitaminE(res?.data?.nutrientsData?.nutrients?.vitamins?.vitaminE || 0);
      setVitaminK(res?.data?.nutrientsData?.nutrients?.vitamins?.vitaminK || 0);
      //   console.log(Weight);
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
      {/* boxes for trends */}
      <div className="flex flex-wrap justify-evenly p-4">
        {/* minerals */}
        <div className="border bg-white border-gray-900 rounded-md w-1/2 md:w-1/3 m-2">
          <h1 className="text-2xl font-bold bg-slate-700 text-white px-4">
            Minerals
          </h1>
          <ul>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Calcium</p>
              <p>{calcium} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  calcium,
                  1000
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Copper</p>
              <p>{copper} mcg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(totalDays, copper, 900)}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Iron</p>
              <p>{iron} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(totalDays, iron, 8)} %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Magnesium</p>
              <p>{magnesium} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  magnesium,
                  400
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Manganese</p>
              <p>{manganese} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  manganese,
                  2.3
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Phosphorus</p>
              <p>{phosphorus} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  phosphorus,
                  700
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Potassium</p>
              <p>{potassium} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  potassium,
                  4700
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Selenium</p>
              <p>{selenium} mcg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  selenium,
                  55
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Sodium</p>
              <p>{sodium} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  sodium,
                  2300
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Zinc</p>
              <p>{zinc} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(totalDays, zinc, 11)} %
              </div>
            </li>
          </ul>
        </div>
        {/* proteins */}
        <div className="border bg-white border-gray-900 rounded-md w-1/2 md:w-1/3 m-2">
          <h1 className="text-2xl font-bold bg-slate-700 text-white px-4">
            Proteins
          </h1>
          <ul>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Cystine</p>
              <p>{cystine} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  cystine,
                  650
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Histidine</p>
              <p>{histidine} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  histidine,
                  650
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Isoleucine</p>
              <p>{isoleucine} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  isoleucine,
                  1235
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Leucine</p>
              <p>{leucine} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  leucine,
                  2730
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Lysine</p>
              <p>{lysine} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  lysine,
                  2470
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Methionine</p>
              <p>{methionine} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  methionine,
                  1235
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Phenylalanine</p>
              <p>{phenylalanine} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  phenylalanine,
                  1625
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Threonine</p>
              <p>{threonine} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  threonine,
                  975
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Tryptophan</p>
              <p>{tryptophan} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  tryptophan,
                  260
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Tyrosine</p>
              <p>{tyrosine} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  tyrosine,
                  1495
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Valine</p>
              <p>{valine} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  valine,
                  1560
                )}{" "}
                %
              </div>
            </li>
          </ul>
        </div>
        {/* lipids */}
        <div className="border bg-white border-gray-900 rounded-md w-1/2 md:w-1/3 m-2">
          <h1 className="text-2xl font-bold bg-slate-700 text-white px-4">
            Lipids
          </h1>
          <ul>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Fat</p>
              <p>{fat || 0} g</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(totalDays, fat, 65) ||
                  0}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Monounsaturated</p>
              <p>{monounsaturated || 0} g</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  monounsaturated,
                  9.75
                ) || 0}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>TransFat</p>
              <p>{transFat || 0} g</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  transFat,
                  2
                ) || 0}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Cholesterol</p>
              <p>{cholesterol || 0} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  cholesterol,
                  300
                ) || 0}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Omega-3</p>
              <p>{omega3 || 0} g</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(totalDays, omega3, 2) ||
                  0}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Omega-6</p>
              <p>{omega6 || 0} g</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  omega6,
                  10
                ) || 0}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Polyunsaturated</p>
              <p>{polyunsaturated || 0} g</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  polyunsaturated,
                  11
                ) || 0}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Saturated</p>
              <p>{saturated || 0} g</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  saturated,
                  20
                ) || 0}{" "}
                %
              </div>
            </li>
          </ul>
        </div>
        {/* carbohydrates */}
        <div className="border bg-white border-gray-900 rounded-md w-1/2 md:w-1/3 m-2">
          <h1 className="text-2xl font-bold bg-slate-700 text-white px-4">
            Carbohydrates
          </h1>
          <ul>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Added Sucrose</p>
              <p>{addedSucrose || 0} g</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  addedSucrose,
                  50
                ) || 0}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Net Carbs</p>
              <p>{netCarbs || 0} g</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  netCarbs,
                  300
                ) || 0}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Carbs</p>
              <p>{carbs || 0} g</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  carbs,
                  300
                ) || 0}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Fiber</p>
              <p>{fiber || 0} g</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(totalDays, fiber, 25) ||
                  0}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Starch</p>
              <p>{starch || 0} g</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  starch,
                  100
                ) || 0}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Sucrose</p>
              <p>{sucrose || 0} g</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  sucrose,
                  50
                ) || 0}{" "}
                %
              </div>
            </li>
          </ul>
        </div>
        {/* vitamins */}
        <div className="border bg-white border-gray-900 rounded-md w-1/2 md:w-1/3 m-2">
          <h1 className="text-2xl font-bold bg-slate-700 text-white px-4">
            Vitamins
          </h1>
          <ul>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Folate</p>
              <p>{folate} mcg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(totalDays, folate, 400)}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Vitamin A</p>
              <p>{vitaminA} mcg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  vitaminA,
                  900
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Vitamin B1 (Thiamine)</p>
              <p>{vitaminB1} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  vitaminB1,
                  1.2
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Vitamin B2 (Riboflavin)</p>
              <p>{vitaminB2} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  vitaminB2,
                  1.3
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Vitamin B3 (Niacin)</p>
              <p>{vitaminB3} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  vitaminB3,
                  16
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Vitamin B5 (Pantothenic acid)</p>
              <p>{vitaminB5} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  vitaminB5,
                  5
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Vitamin B6</p>
              <p>{vitaminB6} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  vitaminB6,
                  2
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Vitamin B12</p>
              <p>{vitaminB12} mcg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  vitaminB12,
                  2.4
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Vitamin C</p>
              <p>{vitaminC} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  vitaminC,
                  90
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Vitamin D</p>
              <p>{vitaminD} mcg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  vitaminD,
                  15
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1 bg-slate-100">
              <p>Vitamin E</p>
              <p>{vitaminE} mg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  vitaminE,
                  15
                )}{" "}
                %
              </div>
            </li>
            <li className="flex justify-evenly items-center p-1">
              <p>Vitamin K</p>
              <p>{vitaminK} mcg</p>
              <div className="border border-gray-900 rounded-md">
                {percentageCalculationOfNutrientsIntake(
                  totalDays,
                  vitaminK,
                  120
                )}{" "}
                %
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrendsCards;
