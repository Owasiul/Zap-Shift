import { CheckCircle2Icon } from "lucide-react";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const setSessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  console.log(setSessionId);

  useEffect(() => {
    if (setSessionId) {
      axiosSecure
        .patch(`/verify-payment-success?session_id=${setSessionId}`)
        .then((res) => console.log(res.data));
        
    }
  }, [setSessionId, axiosSecure]);

  return (
    <div className="w-full  h-full flex flex-col items-center justify-center">
      <CheckCircle2Icon size={40} color="#018749"></CheckCircle2Icon>
      <h2 className="text-xl text-secondary font-bold">Payment Successful</h2>
    </div>
  );
};

export default PaymentSuccess;
