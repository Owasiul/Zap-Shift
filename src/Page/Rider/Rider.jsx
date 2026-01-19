import React from "react";
import riderImg from "../../assets/agent-pending.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const Rider = () => {
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

          <div className="flex flex-col md:flex-row gap-8 items-start">
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
                    // value={formData.name}
                    // onChange={handleChange}
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
                    type="text"
                    name="license"
                    // value={formData.license}
                    // onChange={handleChange}
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
                    // value={formData.email}
                    // onChange={handleChange}
                    placeholder="Your Email"
                    className="input input-bordered w-full bg-white"
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-sm text-gray-700">
                      Your Region
                    </span>
                  </label>
                  <select
                    name="region"
                    // value={formData.region}
                    // onChange={handleChange}
                    className="select select-bordered w-full bg-white"
                  >
                    <option value="">Select your Region</option>
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

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-sm text-gray-700">
                      Your District
                    </span>
                  </label>
                  <select
                    name="district"
                    // value={formData.district}
                    // onChange={handleChange}
                    className="select select-bordered w-full bg-white"
                  >
                    <option value="">Select your District</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chittagong">Chittagong</option>
                    <option value="comilla">Comilla</option>
                    <option value="sylhet">Sylhet</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-sm text-gray-700">
                      NID No
                    </span>
                  </label>
                  <input
                    type="text"
                    name="nid"
                    // value={formData.nid}
                    // onChange={handleChange}
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
                    // value={formData.phone}
                    // onChange={handleChange}
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
                    // value={formData.bikeModel}
                    // onChange={handleChange}
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
                    // value={formData.bikeRegistration}
                    // onChange={handleChange}
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
                    // value={formData.about}
                    // onChange={handleChange}
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
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Rider;
