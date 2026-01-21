import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const UserParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
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
                    <a
                      href="#"
                      className="font-medium text-fg-brand hover:underline"
                    >
                      Edit
                    </a>
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
