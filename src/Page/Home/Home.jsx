import React from "react";
import Banner from "../Home/Ui/Banner";
import HowItworks from "../Home/Ui/HowItworks";
import Services from "../Home/Ui/Services";
import LogoSlider from "../Home/Ui/LogoSlider";
import Trcking from "../Home/Ui/Trcking";
import Satisfaction from "../Home/Ui/Satisfaction";
import CustomerReview from "../Home/Ui/CustomerReview";
import FAQs from "../Home/Ui/FAQs"

const Home = () => {
  return (
    <div className="space-y-10 w-[90%] mx-auto ">
      <Banner></Banner>
      <HowItworks></HowItworks>
      <Services></Services>
      <LogoSlider></LogoSlider>
      <Trcking></Trcking>
      <Satisfaction></Satisfaction>
      <CustomerReview></CustomerReview>
      <FAQs></FAQs>
    </div>
  );
};

export default Home;
