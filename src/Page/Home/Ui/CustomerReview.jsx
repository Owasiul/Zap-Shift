import React, { useEffect, useState } from "react";
import Bages from "../../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
const CustomerReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <div className="my-10 ">
      {/* head */}
      <div className="head gap-5 flex flex-col items-center text-center">
        <img src={Bages} alt="" />
        <div className="txt space-y-5">
          <h1 className="text-4xl text-secondary font-bold ">
            What our customers are sayings
          </h1>
          <p className="text-sm text-neutral-500 w-[75%] mx-auto">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
      </div>
      {/* review body */}
      <div className="cursor-pointer">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          breakpoints={{
            425: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {review.map((info, index) => (
            <SwiperSlide key={index}>
              {" "}
              <ReviewCard info={info}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReview;
