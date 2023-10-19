import React from "react";

const Sipocinputs = (name: any) => {
  return (
    <div> 
      <input
        name={name}
        className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md"
        type="text"
        placeholder=""
      />
    </div>
  );
};

export default Sipocinputs;
