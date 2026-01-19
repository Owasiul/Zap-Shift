import React from "react";
import box from "../../../assets/location-merchant.png"; 
import background from "../../../assets/be-a-merchant-bg.png";
const Satisfaction = () => {
  return (
    <div className="relative flex lg:flex-row flex-col w-full my-10 md:p-20 p-10 bg-secondary rounded-2xl">
      <div className="">
        <img className="absolute left-0 top-0" src={background} alt="" />
      </div>
      <div className="left p-3 space-y-10 lg:w-1/2 w-full">
        <h1 className="md:text-4xl text-3xl font-bold text-white lg:w-[90%]">
          Merchant and Customer Satisfaction is Our First Priority
        </h1>
        <p className="text-neutral-300 text-sm md:w-4/5 w-full">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="flex md:flex-row flex-col items-center gap-5">
          <button className="bg-primary btn-wide rounded-full md:py-4 md:px-8 py-2 px-4 font-bold">
            {" "}
            Become a Merchant
          </button>
          <button className="border border-primary bg-transparent btn-wide text-primary rounded-full md:py-4 md:px-8 py-2 px-4 font-bold text-nowrap">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
      <div className="right lg:w-[50%] w-full flex items-center  ">
        <img className="object-contain mx-auto" src={box} alt="" />
      </div>
    </div>
  );
};

export default Satisfaction;
