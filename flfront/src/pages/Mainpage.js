import React from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import VerticalSlider from "../components/VerticalSlider";
import v1 from "../assets/v1.jpg";
import v2 from "../assets/v2.jpg";
import v3 from "../assets/v3.jpg";
import v4 from "../assets/v4.jpg";
import v5 from "../assets/v5.jpg";
import v6 from "../assets/v6.jpg";
const Mainpage = () => {
    const imageArray=[v1,v2,v3,v4,v5,v6];
    // console.log(imageArray)
  return (
    <>
      <Header />
      <div className="flex justify-evenly h-screen bg-MainPage1">
        <div className="w-6/12 flex items-center">
          <p className="text-6xl text-center font-extrabold text-white ">
            Science-backed nutrition tracking at your fingertips
          </p>
        </div>
        <div className="w-2/12 h-screen flex items-center">
          <VerticalSlider rtl={true} imageArray={imageArray} />
        </div>
        <div className="w-2/12 h-screen flex items-center">
          <VerticalSlider rtl={false} imageArray={imageArray} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mainpage;
