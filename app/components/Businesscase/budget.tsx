import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Budget = () => {
  const [numInputs, setNumInputs] = useState([{}]);

  const handleAddmore = (numInput: any) => {
    setNumInputs([...numInputs, { id: uuidv4() }]);
  };
  return (
    <div>
      <input
        className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md"
        type="text"
        placeholder="Budget"
      />

      <input
        className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md"
        type="text"
        placeholder="Savings"
      />

      {numInputs.map((numInput, index) => (
        <input
          key={index}
          className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md"
          type="text"
          placeholder="Savings"
        />
      ))}

      <button
        onClick={handleAddmore}
        className="transition-all ease-in-out mt-4 border w-full bg-gray-300 text-gray-600 rounded-xl p-2 hover:bg-gray-400"
      >
        +Add more
      </button>
    </div>
  );
};

export default Budget;
