import { Ban } from "lucide-react";
import React from "react";

const PaymentCanceled = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Ban color="#D2042D" size={40}></Ban>
      <h2 className="text-xl my-5 font-bold text-red-500">
        Payment is canceled. Please try again
      </h2>
    </div>
  );
};

export default PaymentCanceled;
