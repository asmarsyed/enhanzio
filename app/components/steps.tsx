import React, { useState } from "react";

interface StepsProps {
  step: any;
  description: any;
  placeholder: any;
  showTag: boolean;
}

const Steps: React.FC<StepsProps> = ({
  step,
  description,
  placeholder,
  showTag,
}) => {
  const [submit, setSubmit] = useState(1);
  const [expanded, setexpanded] = useState(1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmit(2);
    setexpanded(3);
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div>
      <div className="flex justify-between w-full shadow-xl bg-white p-2 rounded-md mt-4">
        <p className="h-full flex justify-center items-center py-2 px-5">
          {step}
        </p>
        <button
          onClick={() => {
            setSubmit(1);
            setexpanded(2);
          }}
          className={`text-white py-2 px-10 rounded-md ${
            expanded === 1
              ? "bg-indigo-900 hover:bg-indigo-700 transition-colors"
              : expanded === 2
              ? "bg-orange-800 transition-colors"
              : "bg-green-800 hover:bg-green-600 transition-colors"
          }}`}
        >
          {expanded === 1 ? (
            <p>Start</p>
          ) : expanded === 2 ? (
            <p>In progress</p>
          ) : (
            <p>Done</p>
          )}
        </button>
      </div>

      <div
        className={`mt-2 w-full shadow-xl bg-white py-2 px-7 rounded-md  ${
          submit === 1
            ? "transition ease-in-out delay-150"
            : "transition-all hidden"
        } ${
          expanded === 1
            ? "hidden transition-opacity duration-500 ease-in-out opacity-0"
            : "transition-opacity duration-500 ease-in-out opacity-100"
        }`}
      >
        <p className="text-gray-500 mt-4">{description}</p>

        {showTag && (
          <form onSubmit={handleSubmit}>
            <input
              name="reponse"
              className="w-full mt-4 border border-gray-400 rounded-md p-2 shadow-md"
              type="text"
              required
              placeholder={placeholder}
            />

            <button
              className={`w-full text-center bg-indigo-900 hover:bg-indigo-700 p-2 rounded-md mb-2 mt-6 text-white`}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Steps;
