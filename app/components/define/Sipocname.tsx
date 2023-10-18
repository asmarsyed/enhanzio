import React from "react";

interface SipocnameProps {
  nom: any;
}

const Sipocname: React.FC<SipocnameProps> = ({ nom }) => {
  return (
    <div>
      <div className="w-full mt-4 border bg-gray-200 border-gray-400 p-2 shadow-md text-gray-600 font-bold text-center">
        {nom}
      </div>
    </div>
  );
};

export default Sipocname;
