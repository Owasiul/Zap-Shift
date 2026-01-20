import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   handle send Parcel
  const handle_Send_Parcel = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Navbar></Navbar>
      <main className="w-[90%] mx-auto md:py-10 py-5">
        <div className="head">
          <h1 className="text-secondary text-5xl font-bold">Send A Parcel</h1>
          <h3 className="mt-12 border-b border-gray-300  pb-10 text-secondary text-2xl font-semibold">
            Enter your parcel details
          </h3>
        </div>
        <form className="mt-10" onSubmit={handleSubmit(handle_Send_Parcel)}>
          <div className="min-h-screen w-full">
            <div className="">
              {/* Document Type Selection */}
              <div className="flex gap-6 mb-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="document"
                    {...register("parcelType")}
                    className="radio radio-success"
                    defaultChecked
                  />
                  <span className="text-sm font-medium">Document</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="not-document"
                    {...register("parcelType")}
                    className="radio radio-success"
                  />
                  <span className="text-sm font-medium">Not-Document</span>
                </label>
              </div>

              {/* Parcel Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Parcel Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Parcel Name"
                    {...register("parcel-name")}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Parcel Weight (KG)
                    </span>
                  </label>
                  <input
                    type="number"
                    {...register("parcelWeight")}
                    placeholder="Parcel Weight (KG)"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              {/* Sender and Receiver Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-300 pt-10">
                {/* Sender Details */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-4">
                    Sender Details
                  </h3>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-medium">
                        Sender Name
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("sender-name")}
                      placeholder="Sender Name"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-medium">
                        Sender Email
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("sender-email")}
                      placeholder="Sender Email"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-medium">Address</span>
                    </label>
                    <input
                      type="text"
                      {...register("sender-address")}
                      placeholder="Address"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-medium">
                        Sender Phone No
                      </span>
                    </label>
                    <input
                      type="number"
                      {...register("sender-number")}
                      placeholder="Sender Phone No starts after +88"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-medium">
                        Your District
                      </span>
                    </label>
                    <select
                      {...register("sender-district")}
                      className="select select-bordered w-full"
                    >
                      <option value="dhaka">Dhaka</option>
                      <option value="chittagong">Chittagong</option>
                      <option value="rajshahi">Rajshahi</option>
                      <option value="khulna">Khulna</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="barisal">Barisal</option>
                      <option value="rangpur">Rangpur</option>
                      <option value="mymensingh">Mymensingh</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">
                        Pickup Instruction
                      </span>
                    </label>
                    <textarea
                      placeholder="Pickup Instruction"
                      {...register("sender-instruction")}
                      className="textarea textarea-bordered w-full h-24"
                    ></textarea>
                  </div>
                </div>

                {/* Receiver Details */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-4">
                    Receiver Details
                  </h3>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-medium">
                        Receiver Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Sender Name"
                      {...register("receiver-name")}
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-medium">
                        Receiver Email
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Sender Email"
                      {...register("receiver-email")}
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-medium">
                        Receiver Address
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      {...register("receiver-address")}
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-medium">
                        Receiver Contact No
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Sender Contact No starts with +88"
                      {...register("receiver-number")}
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-medium">
                        Receiver District
                      </span>
                    </label>
                    <select
                      {...register("receiver-district")}
                      className="select select-bordered w-full"
                    >
                      <option value="dhaka">Dhaka</option>
                      <option value="chittagong">Chittagong</option>
                      <option value="rajshahi">Rajshahi</option>
                      <option value="khulna">Khulna</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="barisal">Barisal</option>
                      <option value="rangpur">Rangpur</option>
                      <option value="mymensingh">Mymensingh</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">
                        Delivery Instruction
                      </span>
                    </label>
                    <textarea
                      placeholder="Delivery Instruction"
                      {...register("receiver-instruction")}
                      className="textarea textarea-bordered w-full h-24"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Pickup Time Note */}
              <div className="mt-6">
                <p className="text-sm text-gray-600">
                  * PickUp Time 4pm-7pm Approx.
                </p>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="btn bg-lime-400 hover:bg-lime-500 text-gray-800 border-none"
                >
                  Proceed to Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default SendParcel;
