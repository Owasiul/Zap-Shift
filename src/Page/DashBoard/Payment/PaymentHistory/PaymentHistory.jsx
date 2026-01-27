import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payment = [] } = useQuery({
    queryKey: ["payment", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-history?email=${user.email}`);1
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-lg font-bold text-secondary">
        Here is your all payment History {payment.length}{" "}
      </h2>
      <div className="table my-5">
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="bg-neutral-secondary-soft border-b border-default">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                 Parcel Info
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                Tracking Number
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                 Payment Info
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {payment.map((pay) => (
                <tr
                  key={pay._id}
                  className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default"
                >
                 <td>{pay.parcelName}</td>
                 <td>{pay.trackingId}</td>
                 <td>{pay.amount} ({pay.PaymentStatus})</td>
                 <td><button className="btn btn-sm bg-gray-50">View</button> </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
