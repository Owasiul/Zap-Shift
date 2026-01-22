import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { EditIcon, EyeIcon, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router";

const UserParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel request has been deleted.",
              icon: "success",
            });
            // refresh
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <h1>All My parcels {parcels.length} </h1>
      <div className="tableBody my-5">
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="bg-neutral-secondary-soft border-b border-default">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  Parcel name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Sender Name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Receiver Name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Parcel Weight
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Parcel Cost
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Payment Status
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Delivery Status
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {parcels.map((parcel) => (
                <tr
                  key={parcel._id}
                  className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {parcel["parcel-name"]}
                  </th>
                  <td className="px-6 py-4">{parcel["sender-name"]}</td>
                  <td className="px-6 py-4">{parcel["receiver-name"]}</td>
                  <td className="px-6 py-4">{parcel.parcelWeight}</td>
                  <td className="px-6 py-4">{parcel.cost}</td>
                  <td className="px-6 py-4">
                    {parcel.paymentStatus === "paid" ? (
                      <span className="text-primary">Paid</span>
                    ) : (
                      <Link to={`/dashboard/payment/${parcel._id}`}>
                        <button className="btn btn-sm bg-red-500 text-white">
                          Pay
                        </button>
                      </Link>
                    )}
                  </td>
                  <td className="px-6 py-4">{parcel.deleveryStatus}</td>
                  <td className="px-6 py-4 flex flex-row gap-3">
                    <button className="btn btn-square hover:bg-primary">
                      <EditIcon />
                    </button>
                    <button className="btn btn-square hover:bg-primary">
                      <EyeIcon />
                    </button>
                    <button
                      onClick={() => handleDelete(parcel._id)}
                      className="btn btn-square hover:bg-primary"
                    >
                      <Trash2 />
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

export default UserParcel;
