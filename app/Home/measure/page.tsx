"use client";
import Navbar from "@/app/components/navbar";
import { useState, useRef } from "react";
import Link from "next/dist/client/link";

export default function Measure() {
  const [expanded1, setExpanded1] = useState(1);
  const [submit1, setSubmit1] = useState(1);

  const [expanded2, setExpanded2] = useState(1);
  const [submit2, setSubmit2] = useState(1);

  const [expanded3, setExpanded3] = useState(1);
  const [submit3, setSubmit3] = useState(1);

  const [expanded4, setExpanded4] = useState(1);
  const [submit4, setSubmit4] = useState(1);

  const [expanded5, setExpanded5] = useState(1);
  const [submit5, setSubmit5] = useState(1);

  const [expanded6, setExpanded6] = useState(1);
  const [submit6, setSubmit6] = useState(1);

  const [expanded7, setExpanded7] = useState(1);
  const [submit7, setSubmit7] = useState(1);

  const reponseRef = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmit1(2);
    setExpanded1(3);
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className="mt-6 mx-6 w-full flex justify-center transition-all">
      <div className="w-full xl:w-[90%]">
        <h1 className="text-xl font-bold">Measure</h1>
        <p className="text-gray-500 mt-4">
          In the realm of Lean Six Sigma improvement, the &apos;Define&apos;
          phase serves as your project&apos;s launchpad. Here, you lay the
          groundwork for success. It&apos;s the crucial first step on your
          journey towards process enhancement.
        </p>

        <div className="flex justify-between w-full shadow-xl bg-white p-2 rounded-md mt-4">
          <p className="h-full flex justify-center items-center py-2 px-5">
            Identify information data
          </p>
          <button
            onClick={() => {
              setSubmit1(1);
              setExpanded1(2);
            }}
            className={`text-white py-2 px-10 rounded-md ${
              expanded1 === 1
                ? "bg-indigo-900 hover:bg-indigo-700 transition-colors"
                : expanded1 === 2
                ? "bg-orange-800 transition-colors"
                : "bg-green-800 hover:bg-green-600 transition-colors"
            }}`}
          >
            {expanded1 === 1 ? (
              <p>Start</p>
            ) : expanded1 === 2 ? (
              <p>In progress</p>
            ) : (
              <p>Done</p>
            )}
          </button>
        </div>

        <div
          className={`mt-2 w-full shadow-xl bg-white py-2 px-7 rounded-md  ${
            submit1 === 1
              ? "transition ease-in-out delay-150"
              : "transition-all hidden"
          } ${
            expanded1 === 1
              ? "hidden transition-opacity duration-500 ease-in-out opacity-0"
              : "transition-opacity duration-500 ease-in-out opacity-100"
          }`}
        >
          <p className="text-gray-500 mt-4">
            1. Identify existing data : What information you have to measure for
            this project ? What is the information system?
          </p>

          <form onSubmit={handleSubmit}>
            <input
              name="reponse"
              className="w-full mt-4 border border-gray-400 rounded-md p-2 shadow-md"
              type="text"
              required
              placeholder="Information data"
            />

            <button
              className={`w-full text-center bg-indigo-900 hover:bg-indigo-700 p-2 rounded-md mb-2 mt-6 text-white`}
            >
              Submit
            </button>
          </form>
        </div>

        <div
          className={`flex justify-between w-full shadow-xl  p-2 rounded-md mt-4 ${
            expanded1 === 3 ? "bg-white transition-colors" : "bg-gray-400"
          } `}
        >
          <p
            className={`h-full flex justify-center items-center py-2 px-5 ${
              expanded1 === 3 ? "" : "text-gray-500"
            } `}
          >
            Data collection
          </p>

          {expanded1 === 3 ? (
            <button
              onClick={() => {
                setSubmit2(1);
                setExpanded2(2);
              }}
              className={`text-white py-2 px-10 rounded-md ${
                expanded2 === 1
                  ? "bg-indigo-900 hover:bg-indigo-700 transition-colors"
                  : expanded2 === 2
                  ? "bg-orange-800 transition-colors"
                  : "bg-green-800 hover:bg-green-600 transition-colors"
              }}`}
            >
              {expanded2 === 1 ? (
                <p>Start</p>
              ) : expanded2 === 2 ? (
                <p>In progress</p>
              ) : (
                <p>Done</p>
              )}
            </button>
          ) : (
            <p></p>
          )}
        </div>

        <div
          className={`mt-2 w-full shadow-xl bg-white py-2 px-7 rounded-md  ${
            submit2 === 1
              ? "transition ease-in-out delay-150"
              : "transition-all hidden"
          } ${
            expanded2 === 1
              ? "hidden transition-opacity duration-500 ease-in-out opacity-0"
              : "transition-opacity duration-500 ease-in-out opacity-100"
          }`}
        >
          <p className="text-gray-500 mt-4">
            2. Prepare data collection : We&apos;ll need a collection plan. You
            will also need a measurement protocol. For the measurement protocol,
            you can use the 5W2H method (Why ? What ? Whese ? When ? Who ? How ?
            How much ?)
          </p>

          <div className="flex w-full">
            <div className="w-1/4 mt-4">
              <div className="p-2 border border-gray-400 ">Why ?</div>
              <div className="p-2 border border-gray-400 ">What ?</div>
              <div className="p-2 border border-gray-400 ">Whese ?</div>
              <div className="p-2 border border-gray-400 ">When ?</div>
              <div className="p-2 border border-gray-400 ">Who ?</div>
              <div className="p-2 border border-gray-400 ">How ?</div>
              <div className="p-2 border border-gray-400 ">How much ?</div>
            </div>

            <div className="flex flex-col w-3/4 mt-4">
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder=""
              />
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder=""
              />
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder=""
              />
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder=""
              />
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder=""
              />
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder=""
              />
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <button
            onClick={() => {
              setSubmit2(2);
              setExpanded2(3);
            }}
            className={`w-full text-center bg-indigo-900 hover:bg-indigo-700 p-2 rounded-md mb-2 mt-6 text-white`}
          >
            Submit
          </button>
        </div>

        <div
          className={`flex justify-between w-full shadow-xl  p-2 rounded-md mt-4 ${
            expanded2 === 3 ? "bg-white transition-colors" : "bg-gray-400"
          } `}
        >
          <p
            className={`h-full flex justify-center items-center py-2 px-5 ${
              expanded2 === 3 ? "" : "text-gray-500"
            } `}
          >
            Verify measure system
          </p>

          {expanded2 === 3 ? (
            <button
              onClick={() => {
                setSubmit3(1);
                setExpanded3(2);
              }}
              className={`text-white py-2 px-10 rounded-md ${
                expanded3 === 1
                  ? "bg-indigo-900 hover:bg-indigo-700 transition-colors"
                  : expanded3 === 2
                  ? "bg-orange-800 transition-colors"
                  : "bg-green-800 hover:bg-green-600 transition-colors"
              }}`}
            >
              {expanded3 === 1 ? (
                <p>Start</p>
              ) : expanded3 === 2 ? (
                <p>In progress</p>
              ) : (
                <p>Done</p>
              )}
            </button>
          ) : (
            <p></p>
          )}
        </div>

        <div
          className={`mt-2 w-full shadow-xl bg-white py-2 px-7 rounded-md  ${
            submit3 === 1
              ? "transition ease-in-out delay-150"
              : "transition-all hidden"
          } ${
            expanded3 === 1
              ? "hidden transition-opacity duration-500 ease-in-out opacity-0"
              : "transition-opacity duration-500 ease-in-out opacity-100"
          }`}
        >
          <p className="text-gray-500 mt-4">
            3. Verify the measure system : It is important to have datas without
            mistakes. To verify the datas, Kappa or R&R can be used to verify
            datas.
          </p>

          <button
            onClick={() => {
              setSubmit3(2);
              setExpanded3(3);
            }}
            className={`w-full text-center bg-indigo-900 hover:bg-indigo-700 p-2 rounded-md mb-2 mt-6 text-white`}
          >
            Submit
          </button>
        </div>

        <div
          className={`flex justify-between w-full shadow-xl  p-2 rounded-md mt-4 ${
            expanded3 === 3 ? "bg-white transition-colors" : "bg-gray-400"
          } `}
        >
          <p
            className={`h-full flex justify-center items-center py-2 px-5 ${
              expanded3 === 3 ? "" : "text-gray-500"
            } `}
          >
            Collecting the data
          </p>

          {expanded3 === 3 ? (
            <button
              onClick={() => {
                setSubmit4(1);
                setExpanded4(2);
              }}
              className={`text-white py-2 px-10 rounded-md ${
                expanded4 === 1
                  ? "bg-indigo-900 hover:bg-indigo-700 transition-colors"
                  : expanded4 === 2
                  ? "bg-orange-800 transition-colors"
                  : "bg-green-800 hover:bg-green-600 transition-colors"
              }}`}
            >
              {expanded4 === 1 ? (
                <p>Start</p>
              ) : expanded4 === 2 ? (
                <p>In progress</p>
              ) : (
                <p>Done</p>
              )}
            </button>
          ) : (
            <p></p>
          )}
        </div>

        <div
          className={`mt-2 w-full shadow-xl bg-white py-2 px-7 rounded-md  ${
            submit4 === 1
              ? "transition ease-in-out delay-150"
              : "transition-all hidden"
          } ${
            expanded4 === 1
              ? "hidden transition-opacity duration-500 ease-in-out opacity-0"
              : "transition-opacity duration-500 ease-in-out opacity-100"
          }`}
        >
          <p className="text-gray-500 mt-4">
            4. Collecting the datas : It&apos;s now time to collect the datas
            that you identified and prepare for.
          </p>

          <button
            onClick={() => {
              setSubmit4(2);
              setExpanded4(3);
            }}
            className={`w-full text-center bg-indigo-900 hover:bg-indigo-700 p-2 rounded-md mb-2 mt-6 text-white`}
          >
            Submit
          </button>
        </div>

        <div
          className={`flex justify-between w-full shadow-xl  p-2 rounded-md mt-4 ${
            expanded4 === 3 ? "bg-white transition-colors" : "bg-gray-400"
          } `}
        >
          <p
            className={`h-full flex justify-center items-center py-2 px-5 ${
              expanded4 === 3 ? "" : "text-gray-500"
            } `}
          >
            Exploiting the data
          </p>

          {expanded4 === 3 ? (
            <button
              onClick={() => {
                setSubmit5(1);
                setExpanded5(2);
              }}
              className={`text-white py-2 px-10 rounded-md ${
                expanded5 === 1
                  ? "bg-indigo-900 hover:bg-indigo-700 transition-colors"
                  : expanded5 === 2
                  ? "bg-orange-800 transition-colors"
                  : "bg-green-800 hover:bg-green-600 transition-colors"
              }}`}
            >
              {expanded5 === 1 ? (
                <p>Start</p>
              ) : expanded5 === 2 ? (
                <p>In progress</p>
              ) : (
                <p>Done</p>
              )}
            </button>
          ) : (
            <p></p>
          )}
        </div>

        <div
          className={`mt-2 w-full shadow-xl bg-white py-2 px-7 rounded-md  ${
            submit5 === 1
              ? "transition ease-in-out delay-150"
              : "transition-all hidden"
          } ${
            expanded5 === 1
              ? "hidden transition-opacity duration-500 ease-in-out opacity-0"
              : "transition-opacity duration-500 ease-in-out opacity-100"
          }`}
        >
          <p className="text-gray-500 mt-4">
            5. Now you need to exploit the datas. To do this, you can describe
            the appearance of the data using tables, graphs, histograms, etc.
          </p>

          <button
            onClick={() => {
              setSubmit5(2);
              setExpanded5(3);
            }}
            className={`w-full text-center bg-indigo-900 hover:bg-indigo-700 p-2 rounded-md mb-2 mt-6 text-white`}
          >
            Submit
          </button>
        </div>

        <div
          className={`flex justify-between w-full shadow-xl  p-2 rounded-md mt-4 ${
            expanded5 === 3 ? "bg-white transition-colors" : "bg-gray-400"
          } `}
        >
          <p
            className={`h-full flex justify-center items-center py-2 px-5 ${
              expanded5 === 3 ? "" : "text-gray-500"
            } `}
          >
            Evaluating process capability
          </p>

          {expanded5 === 3 ? (
            <button
              onClick={() => {
                setSubmit6(1);
                setExpanded6(2);
              }}
              className={`text-white py-2 px-10 rounded-md ${
                expanded6 === 1
                  ? "bg-indigo-900 hover:bg-indigo-700 transition-colors"
                  : expanded6 === 2
                  ? "bg-orange-800 transition-colors"
                  : "bg-green-800 hover:bg-green-600 transition-colors"
              }}`}
            >
              {expanded6 === 1 ? (
                <p>Start</p>
              ) : expanded6 === 2 ? (
                <p>In progress</p>
              ) : (
                <p>Done</p>
              )}
            </button>
          ) : (
            <p></p>
          )}
        </div>

        <div
          className={`mt-2 w-full shadow-xl bg-white py-2 px-7 rounded-md  ${
            submit6 === 1
              ? "transition ease-in-out delay-150"
              : "transition-all hidden"
          } ${
            expanded6 === 1
              ? "hidden transition-opacity duration-500 ease-in-out opacity-0"
              : "transition-opacity duration-500 ease-in-out opacity-100"
          }`}
        >
          <p className="text-gray-500 mt-4">
            6. Evaluating process capability : By calculating the Cp and Cpk
          </p>

          <button
            onClick={() => {
              setSubmit6(2);
              setExpanded6(3);
            }}
            className={`w-full text-center bg-indigo-900 hover:bg-indigo-700 p-2 rounded-md mb-2 mt-6 text-white`}
          >
            Submit
          </button>
        </div>

        <div
          className={`flex justify-between w-full shadow-xl  p-2 rounded-md mt-4 ${
            expanded6 === 3 ? "bg-white transition-colors" : "bg-gray-400"
          } `}
        >
          <p
            className={`h-full flex justify-center items-center py-2 px-5 ${
              expanded6 === 3 ? "" : "text-gray-500"
            } `}
          >
            End-of-phase review
          </p>

          {expanded6 === 3 ? (
            <button
              onClick={() => {
                setSubmit7(1);
                setExpanded7(2);
              }}
              className={`text-white py-2 px-10 rounded-md ${
                expanded7 === 1
                  ? "bg-indigo-900 hover:bg-indigo-700 transition-colors"
                  : expanded7 === 2
                  ? "bg-orange-800 transition-colors"
                  : "bg-green-800 hover:bg-green-600 transition-colors"
              }}`}
            >
              {expanded7 === 1 ? (
                <p>Start</p>
              ) : expanded7 === 2 ? (
                <p>In progress</p>
              ) : (
                <p>Done</p>
              )}
            </button>
          ) : (
            <p></p>
          )}
        </div>

        <div
          className={`mt-2 w-full shadow-xl bg-white py-2 px-7 rounded-md  ${
            submit7 === 1
              ? "transition ease-in-out delay-150"
              : "transition-all hidden"
          } ${
            expanded7 === 1
              ? "hidden transition-opacity duration-500 ease-in-out opacity-0"
              : "transition-opacity duration-500 ease-in-out opacity-100"
          }`}
        >
          <p className="text-gray-500 mt-4">
            7. End-of-phase review : In this last step, you can adjust the
            project chart if you need and also the communication plan.
          </p>

          <Link href="/Home/analyze">
            <button className="transition-all ease-in-out mt-4 border w-full bg-gray-300 text-gray-600 rounded-xl p-2 hover:bg-gray-400 mb-8">
              Analyze phase
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
