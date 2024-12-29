import React from "react";
import Slider from "react-slick";
const VerticalSlider = (props) => {
  const { rtl, imageArray } = props;
  const settings = {
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    vertical: true,
    //   verticalSwiping: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: rtl,
  };

  return (
    <div className="slider-container overflow-hidden relative h-screen w-fit flex items-center">
      <Slider {...settings}>
        <div className="h-2/6">
          <img src={imageArray[0]} alt="A beautiful sunset over the ocean" />
        </div>
        <div className="h-2/6">
          <img src={imageArray[1]} alt="A beautiful sunset over the ocean" />
        </div>
        <div className="h-2/6">
          <img src={imageArray[2]} alt="A beautiful sunset over the ocean" />
        </div>
        <div className="h-2/6">
          <img src={imageArray[3]} alt="A beautiful sunset over the ocean" />
        </div>
        <div className="h-2/6">
          <img src={imageArray[4]} alt="A beautiful sunset over the ocean" />
        </div>
        <div className="h-2/6">
          <img src={imageArray[5]} alt="A beautiful sunset over the ocean" />
        </div>
      </Slider>
    </div>
  );
};

export default VerticalSlider;
