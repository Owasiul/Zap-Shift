import LocTruck from "../../../assets/delivery-van.png";

const HowItworks = () => {
  return (
    <div className="">
      <h1 className="text-3xl text-secondary font-bold">How it works</h1>
      <div className="my-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 items-center ">
        <div className="card space-y-3 lg:w-96 h-64 shadow-sm bg-white p-3 ">
          <img className="object-contain w-20" src={LocTruck} alt="" />
          <h1 className="text-xl font-bold">Booking Pick & Drop</h1>
          <p className="text-neutral-700 text-sm">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="card space-y-3 lg:w-96 h-64 shadow-sm bg-white p-3 ">
          <img className="object-contain w-20" src={LocTruck} alt="" />
          <h1 className="text-xl font-bold">Cash On Delivery</h1>
          <p className="text-neutral-700 text-sm">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="card space-y-3 lg:w-96 h-64 shadow-sm bg-white p-3 ">
          <img className="object-contain w-20" src={LocTruck} alt="" />
          <h1 className="text-xl font-bold">Delivery Hub</h1>
          <p className="text-neutral-700 text-sm">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="card space-y-3 lg:w-96 h-64 shadow-sm bg-white p-3 ">
          <img className="object-contain w-20" src={LocTruck} alt="" />
          <h1 className="text-xl font-bold">Booking SME & Corporate</h1>
          <p className="text-neutral-700 text-sm">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItworks;
