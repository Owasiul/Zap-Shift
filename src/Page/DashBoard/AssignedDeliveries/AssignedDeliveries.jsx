import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user?.email, "rider-assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?email=${user.email}&deliveryStatus=rider-assigned`,
      );
      console.log(res.data);
      return res.data;
    },
  });
  const handleAcceptParcel = (parcel) => {
    const statusInfo = { deliveryStatus: "rider-ariving" };
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Thank you for accepting the parcels.`,
            showConfirmButton: false,
            timer: 2000,
          });
          refetch();
        }
      });
  };
  const handleRejectParcel = (parcel) => {
    const statusInfo = { deliveryStatus: "rider-rejected" };
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `You are not accepting the parcel.`,
            showConfirmButton: false,
            timer: 2000,
          });
          refetch();
        }
      });
  };
  return (
    <div>
      <h2 className="text-lg font-semibold text-primary">
        Here is your all assigned deliveries. {parcels.length}
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
                  Parcel Name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Parcel Cost
                </th>

                <th scope="col" className="px-6 py-3 font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {parcels.map((parcel, index) => (
                <tr
                  key={parcel._id}
                  className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{parcel["parcel-name"]}</td>
                  <td className="px-6 py-4">{parcel.cost}</td>
                  <td className="px-6 py-4 flex gap-5">
                    {parcel.deliveryStatus && (
                      <>
                        <button
                          onClick={() => handleAcceptParcel(parcel)}
                          className="btn btn-success"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleRejectParcel(parcel)}
                          className="btn btn-warning"
                        >
                          Reject
                        </button>
                      </>
                    )}
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

export default AssignedDeliveries;
