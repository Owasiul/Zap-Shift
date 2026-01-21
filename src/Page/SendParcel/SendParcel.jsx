import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
const SendParcel = () => {
  // Mock data for demonstration
  const wireHouse = useLoaderData();
  const wireHouseDuplicate = wireHouse.map((dis) => dis.region);
  const regions = [...new Set(wireHouseDuplicate)];
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, control } = useForm();
  const senderRegions = useWatch({ control, name: "sender-region" });
  const receiverRegions = useWatch({ control, name: "receiver-region" });
  const { user } = useAuth();
  const districtByRegion = (region) => {
    if (!region) return [];
    const regionDistrict = wireHouse.filter(
      (center) => center.region === region,
    );
    const district = regionDistrict.map((dis) => dis.district);
    return district;
  };

  const handle_Send_Parcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }

    console.log("cost is", cost);

    Swal.fire({
      title: "Aggree with the cost?",
      text: `You will be charged! ${cost} taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        // save the parcel info to the db
        axiosSecure
          .post("/parcels", data)
          .then((res) => console.log("after saving the parcel", res.data));

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "I Aggree.",
        //   icon: "success",
        // });
      }
    });
  };

  // // Debug logging
  // console.log("Sender Region:", senderRegions);
  // console.log("Districts:", districtByRegion(senderRegions));

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="w-[90%] mx-auto md:py-10 py-5">
        <div className="head">
          <h1 className="text-gray-800 text-5xl font-bold">Send A Parcel</h1>
          <h3 className="mt-12 border-b border-gray-300 pb-10 text-gray-700 text-2xl font-semibold">
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
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">
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
                      readOnly={true}
                      defaultValue={user?.displayName}
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
                      readOnly={true}
                      defaultValue={user?.email}
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
                        Your Region
                      </span>
                    </label>
                    <select
                      {...register("sender-region")}
                      className="select select-bordered w-full"
                    >
                      <option value="">Pick Your Region</option>
                      {regions.map((dis, index) => (
                        <option key={index} value={dis}>
                          {dis}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-medium">
                        Your District
                      </span>
                    </label>
                    <select
                      {...register("senderDistrict")}
                      className="select select-bordered w-full"
                      disabled={!senderRegions}
                    >
                      <option value="">Pick Your District</option>
                      {senderRegions &&
                        districtByRegion(senderRegions).map((r, i) => (
                          <option key={i} value={r}>
                            {r}
                          </option>
                        ))}
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
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">
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
                      placeholder="Receiver Name"
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
                      placeholder="Receiver Email"
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
                      placeholder="Receiver Contact No starts with +88"
                      {...register("receiver-number")}
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-medium">
                        Receiver Region
                      </span>
                    </label>
                    <select
                      {...register("receiver-region")}
                      className="select select-bordered w-full"
                    >
                      <option value="">Pick Receiver Region</option>
                      {regions.map((dis, index) => (
                        <option key={index} value={dis}>
                          {dis}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-medium">
                        Receiver District
                      </span>
                    </label>
                    <select
                      {...register("receiverDistrict")}
                      className="select select-bordered w-full"
                      disabled={!receiverRegions}
                    >
                      <option value="">Pick Receiver District</option>
                      {receiverRegions &&
                        districtByRegion(receiverRegions).map((r, i) => (
                          <option key={i} value={r}>
                            {r}
                          </option>
                        ))}
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
    </div>
  );
};

export default SendParcel;
