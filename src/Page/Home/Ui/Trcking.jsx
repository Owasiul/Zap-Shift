import React from "react";
import Track1 from "../../../assets/live-tracking.png";
import Track2 from "../../../assets/safe-delivery.png";
const Trcking = () => {
  return (
    <div className="py-5 border-y border-dashed my-5 flex flex-col items-center gap-4 w-full">
      {/* card 1 */}
      <div
        className="
    p-6 md:p-8 
    rounded-3xl 
    shadow-sm 
    bg-white
    flex flex-col md:flex-row 
    items-center 
    gap-6 md:gap-10
    lg:max-w-7xl w-full
    mx-auto
  "
      >
        {/* Left */}
        <div className="shrink-0 flex justify-center">
          <img
            className="object-contain w-24 h-24 md:w-40 md:h-40"
            src={Track1}
            alt="Live Parcel Tracking"
          />
        </div>

        {/* Divider (Desktop) */}
        <div className="hidden md:block h-24 border-r border-dashed border-neutral-300"></div>

        {/* Divider (Mobile) */}
        <div className="block md:hidden w-full border-t border-dashed border-neutral-300"></div>

        {/* Right */}
        <div className="space-y-3 text-center md:text-left">
          <h2 className="text-lg md:text-xl font-semibold text-secondary">
            Live Parcel Tracking
          </h2>

          <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-xl">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      {/* card 2 */}
      <div
        className="
    p-6 md:p-8 
    rounded-3xl 
    shadow-sm 
    bg-white
    flex flex-col md:flex-row 
    items-center 
    gap-6 md:gap-10
    lg:max-w-7xl w-full
    mx-auto
  "
      >
        {/* Left */}
        <div className="shrink-0 flex justify-center">
          <img
            className="object-contain w-24 h-24 md:w-40 md:h-40"
            src={Track2}
            alt="Live Parcel Tracking"
          />
        </div>

        {/* Divider (Desktop) */}
        <div className="hidden md:block h-24 border-r border-dashed border-neutral-300"></div>

        {/* Divider (Mobile) */}
        <div className="block md:hidden w-full border-t border-dashed border-neutral-300"></div>

        {/* Right */}
        <div className="space-y-3 text-center md:text-left">
          <h2 className="text-lg md:text-xl font-semibold text-secondary">
            100% Safe Delivery
          </h2>

          <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-xl">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      {/* card 3 */}
      <div
        className="
    p-6 md:p-8 
    rounded-3xl 
    shadow-sm 
    bg-white
    flex flex-col md:flex-row 
    items-center 
    gap-6 md:gap-10
    lg:max-w-7xl w-full
    mx-auto
  "
      >
        {/* Left */}
        <div className="shrink-0 flex justify-center">
          <img
            className="object-contain w-24 h-24 md:w-40 md:h-40"
            src={Track2}
            alt="Live Parcel Tracking"
          />
        </div>

        {/* Divider (Desktop) */}
        <div className="hidden md:block h-24 border-r border-dashed border-neutral-300"></div>

        {/* Divider (Mobile) */}
        <div className="block md:hidden w-full border-t border-dashed border-neutral-300"></div>

        {/* Right */}
        <div className="space-y-3 text-center md:text-left">
          <h2 className="text-lg md:text-xl font-semibold text-secondary">
            24/7 Call Center Support
          </h2>

          <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-xl">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trcking;
// width: 1282px;
// height: 264px;
