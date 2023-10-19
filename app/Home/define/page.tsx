"use client";

import React from "react";
import { useState, useRef } from "react";
import Link from "next/dist/client/link";
import steps from "@/app/components/steps";
import Sipoc from "@/app/components/define/SIPOC/Sipoc";

const Define = () => {
  const [expanded1, setExpanded1] = useState(3);
  const [submit1, setSubmit1] = useState(3);

  const [expanded2, setExpanded2] = useState(3);
  const [submit2, setSubmit2] = useState(3);

  const [expanded3, setExpanded3] = useState(3);
  const [submit3, setSubmit3] = useState(3);

  const [expanded4, setExpanded4] = useState(3);
  const [submit4, setSubmit4] = useState(3);

  const [expanded5, setExpanded5] = useState(3);
  const [submit5, setSubmit5] = useState(3);

  const [expanded6, setExpanded6] = useState(3);
  const [submit6, setSubmit6] = useState(3);

  const [expanded7, setExpanded7] = useState(3);
  const [submit7, setSubmit7] = useState(3);

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
        <h1 className="text-xl font-bold">Define</h1>
        <p className="text-gray-500 mt-4">
          In the realm of Lean Six Sigma improvement, the &apos;Define&apos;
          phase serves as your project&apos;s launchpad. Here, you lay the
          groundwork for success. It&apos;s the crucial first step on your
          journey towards process enhancement.
        </p>

        {/* <Steps
          step="ffkoe"
          description="fiefjzfez"
          placeholder="define"
          showTag={true}
        /> */}

        <div className="flex justify-between w-full shadow-xl bg-white p-2 rounded-md mt-4">
          <p className="h-full flex justify-center items-center py-2 px-5">
            Defining the problem
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
            1. Defining the problem : What challenge or opportunity do you seek
            to address? It&apos;s about pinpointing the core problem that needs
            solving or the process that requires optimization.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              name="reponse"
              className="w-full mt-4 border border-gray-400 rounded-md p-2 shadow-md"
              type="text"
              required
              placeholder="Define the problem"
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
            Voice Of the Customer
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
            2. Identifying what the customers want and serving priorities to
            their needs. That is what we call the Voice Of the Customer
            <input
              className="w-full mt-4 border border-gray-400 rounded-md p-2 shadow-md"
              type="text"
              placeholder="Voice Of the Customer (VOC)"
            />
          </p>

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
            Defining the project objective
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
            3. Defining the project objective.
            <input
              className="w-full mt-4 border border-gray-400 rounded-md p-2 shadow-md"
              type="text"
              placeholder="Project objective"
            />
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
            Project scope
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
            4. To define the project&apos;s scope, this step involves using the
            SIPOC tool, which stands for Supplier, Input, Process, Output,
            Customer. SIPOC is a visual framework commonly used in process
            improvement, breaking down a process into key components for a
            high-level understanding.
          </p>

          <Sipoc />

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
            Business case
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
            5. Defining the business case, which involves specifying the budget
            and calculating the potential cost savings achievable through this
            project. This financial aspect clarifies the project&apos;s economic
            impact and feasibility.
          </p>

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

          <button className="transition-all ease-in-out mt-4 border w-full bg-gray-300 text-gray-600 rounded-xl p-2 hover:bg-gray-400">
            +Add more
          </button>

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
            Project team
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
            6. Defining the team for your DMAIC project :
          </p>

          <div className="flex w-full">
            <div className="w-1/4 mt-4">
              <div className="p-2 border border-gray-400 ">Team leader</div>
              <div className="p-2 border border-gray-400 ">Team members</div>
              <div className="p-2 border border-gray-400 ">Sponsor</div>
              <div className="p-2 border border-gray-400 ">Stakeholders</div>
            </div>

            <div className="flex flex-col w-3/4 mt-4">
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder="Full name"
              />
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder="Full name"
              />
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder="Full name"
              />
              <input
                className="border border-gray-400 p-2"
                type="text"
                placeholder="Full name"
              />
            </div>
          </div>
          <button className="transition-all ease-in-out mt-4 border w-full bg-gray-300 text-gray-600 rounded-xl p-2 hover:bg-gray-400">
            +Add more
          </button>

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
            Plan
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
            The last step of the Define phase is to plan your project.
          </p>

          <Link href="/Home/planning">
            <button className="transition-all ease-in-out mt-4 border w-full bg-gray-300 text-gray-600 rounded-xl p-2 hover:bg-gray-400 mb-8">
              Plan the project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Define;
