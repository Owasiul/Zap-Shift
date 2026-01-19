import React from "react";
import Tab from "./Ui/Tab";
import { useLoaderData } from "react-router";
const About_Us = () => {
  const data = useLoaderData();
  return (
    <div className="w-[90%] my-10 mx-auto">
      <div className="head space-y-3 pb-10 border-b">
        <h1 className="text-4xl text-secondary font-bold">About Us</h1>
        <p className="text-sm">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal <br className="md:block hidden" /> packages to
          business shipments — we deliver on time, every time.
        </p>
      </div>

      <div className="body my-10">
        <Tab data={data}></Tab>
      </div>
    </div>
  );
};

export default About_Us;
