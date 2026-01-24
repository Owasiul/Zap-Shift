import { CheckCircle2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState();
  const setSessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (setSessionId) {
      axiosSecure
        .patch(`/verify-payment-success?session_id=${setSessionId}`)
        .then((res) => {
          console.log("Full API Response:", res);
          console.log("Response Data:", res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        })
        .catch((error) => {
          console.error("Error fetching payment info:", error);
        });
    }
  }, [setSessionId, axiosSecure]);
  console.log("Payment Info State:", paymentInfo);


  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <CheckCircle2Icon size={40} color="#018749"></CheckCircle2Icon>
      <h2 className="text-xl text-secondary font-bold">Payment Successful</h2>
      {paymentInfo && (
        <div className="space-y-2 text-center">
          <p className="text-lg">
            <span className="font-semibold">Transaction ID:</span> {paymentInfo?.transactionId}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Tracking ID:</span> {paymentInfo?.trackingId}
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
