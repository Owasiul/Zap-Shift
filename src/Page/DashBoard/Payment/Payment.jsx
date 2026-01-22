import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });
  const handlePayment = async () => {
    try {
      const paymentInfo = {
        cost: parcel.cost,
        email: parcel["sender-email"],
        parcelId: parcel._id,
        "parcel-name": parcel["parcel-name"],
      };

      console.log("sending paymentInfo", paymentInfo);
      const res = await axiosSecure.post(
        "/create-checkout-session",
        paymentInfo,
      );

      // Redirect to Stripe checkout page
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (error) {
      console.error("Payment error:", error);
      // Handle error (show message to user)
    }
  };
  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <div className="flex flex-row gap-5 items-center">
      <h2>
        Please Pay {parcel?.cost} taka for Parcel Name:{" "}
        {parcel?.["parcel-name"]}
      </h2>
      <button onClick={handlePayment} className="btn btn-wide">
        Pay
      </button>
    </div>
  );
};

export default Payment;
