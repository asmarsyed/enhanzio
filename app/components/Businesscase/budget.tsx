import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Budget = () => {
  const [numInputs, setNumInputs] = useState([{}]);
  const [hidden, setHidden] = useState(false);
  const [placeholder, setPlaceholder] = useState("");

  const handleAddmore = (numInput: any) => {
    setNumInputs([...numInputs, numInput]);
  };

  return (
    <div>
      <div className="flex">
        <input
          className="w-[35%] mt-4 border border-gray-400 rounded-sm p-2 shadow-md"
          type="text"
          placeholder="Ex : Budget"
        />
        <input
          className="w-[65%] mt-4 border border-gray-400 rounded-sm p-2 shadow-md"
          type="text"
          placeholder="Amount"
        />
      </div>
      <div className="flex">
        <input
          className="w-[35%] mt-4 border border-gray-400 rounded-sm p-2 shadow-md"
          type="text"
          placeholder="Ex : Savings"
        />
        <input
          className="w-[65%] mt-4 border border-gray-400 rounded-sm p-2 shadow-md"
          type="text"
          placeholder="Amount"
        />
      </div>
      {numInputs.map((_, index) => (
        <div className="flex">
          <input
            key={index}
            className="w-[35%] mt-4 border border-gray-400 rounded-sm p-2 shadow-md"
            type="text"
            placeholder=""
          />
          <input
            key={index}
            className="w-[65%] mt-4 border border-gray-400 rounded-sm p-2 shadow-md"
            type="text"
            placeholder="Amount"
          />
        </div>
      ))}

      <button
        onClick={() => {
          handleAddmore(numInputs);
        }}
        className="transition-all ease-in-out mt-4 border w-full bg-gray-300 text-gray-600 rounded-xl p-2 hover:bg-gray-400"
      >
        +Add more
      </button>
    </div>
  );
};

export default Budget;
