import riderImg from "../../assets/agent-pending.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const Rider = () => {
  const { register, handleSubmit, control } = useForm();
  const { user } = useAuth();
  const wireHouse = useLoaderData();
  const wireHouseDuplicate = wireHouse.map((dis) => dis.region);
  const regions = [...new Set(wireHouseDuplicate)];
  const riderRegions = useWatch({ control, name: "rider-region" });
  const axiosSecure = useAxiosSecure();

  const districtByRegion = (region) => {
    if (!region) return [];
    const regionDistrict = wireHouse.filter(
      (center) => center.region === region,
    );
    const district = regionDistrict.map((dis) => dis.district);
    return district;
  };

  const handleBeRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:
            "Your application has been submited. We will reach you soon...",
          showConfirmButton: false,
          timer: 2000,
        });
        console.log("Rider has been created", res.data.insertedId);
      }
    });
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen bg-white">
        <div className="w-[90%] mx-auto md:py-20 py-10">
          <div className="head mb-8">
            <div className="pb-6 mb-8">
              <h1 className="text-3xl font-bold mb-3 text-secondary">
                Be a Rider
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed md:w-[30%] w-full">
                Enjoy fast, reliable parcel delivery with real-time tracking and
                zero hassle. From personal packages to business shipments - we
                deliver on time, every time.
              </p>
            </div>

            <h2 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-dotted border-gray-300 text-secondary">
              Tell us about yourself
            </h2>
          </div>

          <form
            onSubmit={handleSubmit(handleBeRiderApplication)}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Form Side */}
            <div className="w-full md:w-1/2">
              <div className="space-y-4 max-w-md">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-sm text-gray-700">
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user.displayName}
                    readOnly={true}
                    {...register("name")}
                    placeholder="Your Name"
                    className="input input-bordered w-full bg-white"
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-sm text-gray-700">
                      Driving License Number
                    </span>
                  </label>
                  <input
                    type="number"
                    name="license"
                    {...register("drivingLicence")}
                    placeholder="Driving License Number"
                    className="input input-bordered w-full bg-white"
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-sm text-gray-700">
                      Your Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    readOnly={true}
                    defaultValue={user.email}
                    {...register("email")}
                    placeholder="Your Email"
                    className="input input-bordered w-full bg-white"
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text font-medium">Your Region</span>
                  </label>
                  <select
                    {...register("rider-region")}
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
                    {...register("riderDistrict")}
                    className="select select-bordered w-full"
                    disabled={!riderRegions}
                  >
                    <option value="">Pick Your District</option>
                    {riderRegions &&
                      districtByRegion(riderRegions).map((r, i) => (
                        <option key={i} value={r}>
                          {r}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-sm text-gray-700">
                      NID No
                    </span>
                  </label>
                  <input
                    type="number"
                    name="nid"
                    {...register("nid")}
                    placeholder="NID"
                    className="input input-bordered w-full bg-white"
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-sm text-gray-700">
                      Phone Number
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    {...register("number")}
                    placeholder="Phone Number"
                    className="input input-bordered w-full bg-white"
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-sm text-gray-700">
                      Bike Brand Model and Year
                    </span>
                  </label>
                  <input
                    type="text"
                    name="bikeModel"
                    {...register("bikeModel")}
                    placeholder="Bike Brand Model and Year"
                    className="input input-bordered w-full bg-white"
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-sm text-gray-700">
                      Bike Registration Number
                    </span>
                  </label>
                  <input
                    type="text"
                    name="bikeRegistration"
                    {...register("bikeRegistration")}
                    placeholder="Bike Registration Number"
                    className="input input-bordered w-full bg-white"
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-sm text-gray-700">
                      Tell Us About Yourself
                    </span>
                  </label>
                  <textarea
                    name="about"
                    {...register("yourself")}
                    placeholder="Tell Us About Yourself"
                    rows="4"
                    className="textarea textarea-bordered w-full bg-white"
                  />
                </div>

                <button
                  //   onClick={handleSubmit}
                  className="btn w-full mt-4 bg-lime-400 hover:bg-lime-500 text-gray-900 border-none font-semibold"
                >
                  Submit
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-1/2 flex justify-center items-start">
              <img src={riderImg} alt="" />
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Rider;
