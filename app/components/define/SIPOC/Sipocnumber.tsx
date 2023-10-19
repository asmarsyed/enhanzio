import React from "react";

interface SipocnumberProps {
  number: any;
}

const Sipocnumber: React.FC<SipocnumberProps> = ({ number }) => {
  return (
    <div>
      <p className="w-full mt-4 border bg-gray-200 border-gray-400 p-2 shadow-md text-gray-600 font-bold text-center">
        {number}
      </p>
    </div>
  );
};

export default Sipocnumber;
