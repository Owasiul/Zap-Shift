import React from "react";
import serviceImg from "../../../assets/service.png";
const Services = () => {
  return (
    <div className="bg-[#03373d] p-5 rounded-4xl w-[90%]  mx-auto my-5">
      <div className="head text-center space-y-3 ">
        <h1 className="text-white text-3xl font-bold">Our Services</h1>
        <p className="text-white text-sm lg:w-[40%] mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. from personal packages to business shipments - we deliver on
          time, every time
        </p>
      </div>
      <div className="services my-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
        <div className="card bg-white flex flex-col justify-center items-center text-center lg:py-8 lg:px-6 py-4 px-3 hover:bg-primary space-y-4 lg:h-86.5 lg:w-102.5 mx-auto rounded-3xl">
          <img
            className="object-contain w-10 flex items-center mx-auto"
            src={serviceImg}
            alt=""
          />
          <h1 className="text-secondary text-2xl text-center font-semibold">
            Express & Standard Delivery
          </h1>
          <p className="text-sm text-neutral-700">
            We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="card bg-white flex flex-col justify-center items-center text-center lg:py-8 lg:px-6 py-4 px-3 hover:bg-primary space-y-4 lg:h-86.5 lg:w-102.5 mx-auto rounded-3xl">
          <img
            className="object-contain w-10 flex items-center mx-auto"
            src={serviceImg}
            alt=""
          />
          <h1 className="text-secondary text-2xl text-center font-semibold">
            Nationwide Delivery
          </h1>
          <p className="text-sm text-neutral-700 text-center">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>
        <div className="card bg-white flex flex-col justify-center items-center text-center lg:py-8 lg:px-6 py-4 px-3 hover:bg-primary space-y-4 lg:h-86.5 lg:w-102.5 mx-auto rounded-3xl">
          <img
            className="object-contain w-10 flex items-center mx-auto"
            src={serviceImg}
            alt=""
          />
          <h1 className="text-secondary text-2xl text-center font-semibold">
            Fulfillment Solution
          </h1>
          <p className="text-sm text-neutral-700 text-center">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>
        <div className="card bg-white flex flex-col justify-center items-center text-center lg:py-8 lg:px-6 py-4 px-3 hover:bg-primary space-y-4 lg:h-86.5 lg:w-102.5 mx-auto rounded-3xl">
          <img
            className="object-contain w-10 flex items-center mx-auto"
            src={serviceImg}
            alt=""
          />
          <h1 className="text-secondary text-2xl text-center font-semibold">
            Cash on Home Delivery
          </h1>
          <p className="text-sm text-neutral-700 text-center">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="card bg-white flex flex-col justify-center items-center text-center lg:py-8 lg:px-6 py-4 px-3 hover:bg-primary space-y-4 lg:h-86.5 lg:w-102.5 mx-auto rounded-3xl">
          <img
            className="object-contain w-10 flex items-center mx-auto"
            src={serviceImg}
            alt=""
          />
          <h1 className="text-secondary text-2xl text-center font-semibold">
            Corporate Service / Contract in Logistics
          </h1>
          <p className="text-sm text-neutral-700 text-center">
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>
        <div className="card bg-white flex flex-col justify-center items-center text-center lg:py-8 lg:px-6 py-4 px-3 hover:bg-primary space-y-4 lg:h-86.5 lg:w-102.5 mx-auto rounded-3xl">
          <img
            className="object-contain w-10 flex items-center mx-auto"
            src={serviceImg}
            alt=""
          />
          <h1 className="text-secondary text-2xl text-center font-semibold">
            Parcel Return
          </h1>
          <p className="text-sm text-neutral-700 text-center">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
