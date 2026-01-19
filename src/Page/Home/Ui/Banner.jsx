import React from "react";
import BannerImg1 from "../../../assets/banner/banner1.png";
import BannerImg2 from "../../../assets/banner/banner2.png";
import BannerImg3 from "../../../assets/banner/banner3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="my-5 p-5  ">
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div className="">
          <img src={BannerImg1} />
          <div
            className={`felx  relative flex-row space-x-5 items-center lg:bottom-35 bottom-15 lg:right-165 right-50 `}
          >
            <button className="btn rounded-full bg-lime-400 btn-md  font-bold">
              Track Your Parcel
            </button>
            <button className="btn btn-md  font-bold">Be a Rider</button>
          </div>
        </div>
        <div>
          <img src={BannerImg2} />
        </div>
        <div>
          <img src={BannerImg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
