import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/star.png";
import logo7 from "../../../assets/brands/start_people.png";
const LogoSlider = () => {
  return (
    <div className="my-10 space-y-8">
        <h1 className="text-center text-secondary lg:text-4xl text-3xl font-bold">We've helped thousands of sales teams</h1>
      <Marquee>
        <div className="flex items-center gap-4">
          <img className="mx-5" src={logo3} alt="" />
          <img className="mx-5" src={logo1} alt="" />
          <img className="mx-5" src={logo4} alt="" />
          <img className="mx-5" src={logo2} alt="" />
          <img className="mx-5" src={logo5} alt="" />
          <img className="mx-5" src={logo6} alt="" />
          <img className="mx-5" src={logo7} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default LogoSlider;
