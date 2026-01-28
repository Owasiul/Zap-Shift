import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {
  BrushCleaning,
  UserCheck2Icon,
  UserMinus2Icon,
  ViewIcon,
} from "lucide-react";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const handleStatus = (rider, status) => {
    const updatedInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updatedInfo).then((res) => {
      if (res.data.modifiedCount > 0 || res.data.acknowledged) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Your application has been ${status}. Now you are our offical rider`,
          showConfirmButton: false,
          timer: 2000,
        });
        console.log("Rider has been updated", res.data);
      }
    });
  };

  const handleApprove = (rider) => {
    handleStatus(rider, "approved");
  };
  const handleReject = (rider) => {
    handleStatus(rider, "reject");
  };

  return (
    <div>
      <h2 className="text-5xl text-primary">
        Hello From Approve Riders. Need to approve {riders.length}{" "}
      </h2>
      <div className="table my-5">
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="bg-neutral-secondary-soft border-b border-default">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  No.
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Rider Name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Driving Licence
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  NID Number
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Mobile Number
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Rider District
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Bike Registration
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Bike Model
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {riders.map((rider, index) => (
                <tr
                  key={rider._id}
                  className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{rider.name}</td>
                  <td className="px-6 py-4">{rider.drivingLicence}</td>
                  <td className="px-6 py-4">{rider.nid}</td>
                  <td className="px-6 py-4">{rider.number}</td>
                  <td className="px-6 py-4">{rider.riderDistrict}</td>
                  <td className="px-6 py-4">{rider.bikeRegistration}</td>
                  <td className="px-6 py-4">{rider.bikeModel}</td>
                  <td
                    className={`px-6 py-4 ${rider.status === "approved" ? "text-green-500" : "text-red-600"} font-semibold`}
                  >
                    {rider.status}
                  </td>
                  <td className="px-6 py-4 flex gap-3">
                    <button
                      onClick={() => handleApprove(rider)}
                      className="btn btn-sm bg-gray-50 hover:bg-gray-100"
                    >
                      <UserCheck2Icon />
                    </button>
                    <button
                      onClick={() => handleReject(rider)}
                      className="btn btn-sm bg-gray-50 hover:bg-gray-100"
                    >
                      <UserMinus2Icon />
                    </button>
                    <button className="btn btn-sm bg-gray-50 hover:bg-gray-100">
                      <BrushCleaning />
                    </button>
                    <button className="btn btn-sm bg-gray-50 hover:bg-gray-100">
                      <ViewIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApproveRiders;
