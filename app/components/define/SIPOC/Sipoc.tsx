import React, { useState } from "react";
import Sipocnumber from "./Sipocnumber";
import Sipocname from "./Sipocname";
import Sipocinputs from "./Sipocinputs";

const Sipoc = () => {
  const [moresipoc, setMoresipoc] = useState([
    { s: "", i: "", p: "", o: "", c: "" },
  ]);

  const [moresipocnumber, setMoresipocnumber] = useState([{}]);

  const [sipocnumber, setSipocnumber] = useState(6);

  const handleMoreSipoc = () => {
    setMoresipoc([...moresipoc, { s: "", i: "", p: "", o: "", c: "" }]);
  };
  const handleMoreSipocnumber = () => {
    setMoresipocnumber([...moresipocnumber, { a: sipocnumber }]);
    setSipocnumber(sipocnumber + 1);
  };

  const numInputs = 25;

  const inputElements = Array.from({ length: numInputs }, (_, index) => (
    <input
      key={index}
      className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md"
      type="text"
      placeholder=""
    />
  ));
  return (
    <div>
      <div className="w-full flex">
        <div className="grid grid-cols-1 gap-[2px] h-full max-sm:text-[7px] max-md:text-[14px] mr-1 w-[10%]">
          <p className="w-full mt-4 border bg-gray-200 border-gray-400 px-1 py-2 shadow-md text-gray-600 font-bold text-center">
            Steps
          </p>
          <Sipocnumber number="1" />
          <Sipocnumber number="2" />
          <Sipocnumber number="3" />
          <Sipocnumber number="4" />
          <Sipocnumber number="5" />

          {moresipocnumber.map((val, index) => (
            <>
              <Sipocnumber number={index + 6} />
            </>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-[2px] w-[90%] h-full text-center max-sm:text-[7px] max-md:text-[14px]">
          <Sipocname nom="Supplier" />
          <Sipocname nom="Input" />
          <Sipocname nom="Process" />
          <Sipocname nom="Output" />
          <Sipocname nom="Customer" />

          {inputElements}

          {moresipoc.map(() => (
            <>
              <Sipocinputs name="s" />
              <Sipocinputs name="i" />
              <Sipocinputs name="p" />
              <Sipocinputs name="o" />
              <Sipocinputs name="c" />
            </>
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          handleMoreSipoc();
          handleMoreSipocnumber();
        }}
        className="transition-all ease-in-out mt-4 border w-full bg-gray-300 text-gray-600 rounded-xl p-2 hover:bg-gray-400"
      >
        +Add more
      </button>

      <p className="text-gray-500 mt-4">Define now the scope of the project</p>

      <input
        className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md"
        type="text"
        placeholder="In Scope"
      />

      <input
        className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md"
        type="text"
        placeholder="Out Scope"
      />
    </div>
  );
};

export default Sipoc;
