"use client";

import React, { useState } from "react";
import Steps from "@/app/components/steps";
import { DatePickerWithRange } from "./datepicker";

const Definingtheproblem = () => {
  const [inputList, setInputList] = useState([
    { Gain: "", Currentvalue: "", Targetvalue: "" },
  ]);

  const handleAddmore = () => {
    setInputList([
      ...inputList,
      { Gain: "", Currentvalue: "", Targetvalue: "" },
    ]);
  };

  const [inputList2, setInputList2] = useState([
    { Role: "", Name: "", Estimated: "" },
  ]);

  const handleAddmore2 = () => {
    setInputList2([...inputList2, { Role: "", Name: "", Estimated: "" }]);
  };
  return (
    <div className="">
      <Steps stepname="Defining the problem">
        <div className="flex w-full h-full">
          <div className="w-1/2 mr-[45px]">
            <p className="mb-4 mt-2 text-[18px]">
              Defining the problem with the 5W2H method
            </p>
            <div className="flex justify-end items-center flex-auto mb-4">
              <p className="mr-2 text-[18px]">What ?</p>
              <input
                className="h-[34px] w-[75%] flex items-center p-2 rounded-md border border-[#CCCCCC]"
                type="text"
              />
            </div>
            <div className="flex justify-end items-center flex-auto mb-4">
              <p className="mr-2 text-[18px]">Where ?</p>
              <input
                className="h-[34px] w-[75%] flex items-center p-2 rounded-md border border-[#CCCCCC]"
                type="text"
              />
            </div>
            <div className="flex justify-end items-center flex-auto mb-4">
              <p className="mr-2 text-[18px]">When ?</p>
              <input
                className="h-[34px] w-[75%] flex items-center p-2 rounded-md border border-[#CCCCCC]"
                type="text"
              />
            </div>
            <div className="flex justify-end items-center flex-auto mb-4">
              <p className="mr-2 text-[18px]">Who ?</p>
              <input
                className="h-[34px] w-[75%] flex items-center p-2 rounded-md border border-[#CCCCCC]"
                type="text"
              />
            </div>
            <div className="flex justify-end items-center flex-auto mb-4">
              <p className="mr-2 text-[18px]">Why ?</p>
              <input
                className="h-[34px] w-[75%] flex items-center p-2 rounded-md border border-[#CCCCCC]"
                type="text"
              />
            </div>
            <div className="flex justify-end items-center flex-auto mb-4">
              <p className="mr-2 text-[18px]">How ?</p>
              <input
                className="h-[34px] w-[75%] flex items-center p-2 rounded-md border border-[#CCCCCC]"
                type="text"
              />
            </div>
            <div className="flex justify-end items-center flex-auto mb-4">
              <p className="mr-2 text-[18px]">How much ?</p>
              <input
                className="h-[34px] w-[75%] flex items-center p-2 rounded-md border border-[#CCCCCC]"
                type="text"
              />
            </div>
          </div>
          <div className="w-1/2">
            <p className="text-[18px] mt-2 mb-4">
              Now define the problem briefly :
            </p>
            <div className="h-full">
              <textarea className="w-full h-[80%] p-2 rounded-md align-top border border-[#CCCCCC]" />
            </div>
          </div>
        </div>
      </Steps>
      <Steps stepname="Project scope">
        <div className="w-full mt-4">
          <div className="w-full flex justify-end mb-4">
            <p className="mr-4">In scope</p>
            <input
              className="w-[90%] flex items-center p-2 rounded-md border border-[#CCCCCC] h-[34px]"
              type="text"
            />
          </div>
          <div className="w-full flex justify-end">
            <p className="mr-4">Out scope</p>
            <input
              className="w-[90%] flex items-center p-2 rounded-md border border-[#CCCCCC] h-[34px]"
              type="text"
            />
          </div>
        </div>
      </Steps>
      <Steps stepname="Project Goal">
        <div className="flex w-full h-full">
          <div className="w-1/2 mr-[45px]">
            <p className="mb-4 mt-2 text-[18px]">
              Defining the problem with the SMART method
            </p>
            <div className="flex justify-end items-center flex-auto mb-4">
              <p className="mr-2 text-[18px]">Specific</p>
              <input
                className="h-[34px] w-[75%] flex items-center p-2 rounded-md border border-[#CCCCCC]"
                type="text"
              />
            </div>
            <div className="flex justify-end items-center flex-auto mb-4">
              <p className="mr-2 text-[18px]">Measurable</p>
              <input
                className="h-[34px] w-[75%] flex items-center p-2 rounded-md border border-[#CCCCCC]"
                type="text"
              />
            </div>
            <div className="flex justify-end items-center flex-auto mb-4">
              <p className="mr-2 text-[18px]">Achievable</p>
              <input
                className="h-[34px] w-[75%] flex items-center p-2 rounded-md border border-[#CCCCCC]"
                type="text"
              />
            </div>
            <div className="flex justify-end items-center flex-auto mb-4">
              <p className="mr-2 text-[18px]">Relevant</p>
              <input
                className="h-[34px] w-[75%] flex items-center p-2 rounded-md border border-[#CCCCCC]"
                type="text"
              />
            </div>
            <div className="flex justify-end items-center flex-auto mb-4">
              <p className="mr-2 text-[18px]">Time-based</p>
              <input
                className="h-[34px] w-[75%] flex items-center p-2 rounded-md border border-[#CCCCCC]"
                type="text"
              />
            </div>
          </div>
          <div className="w-1/2">
            <p className="text-[18px] mt-2 mb-4">
              Now define the problem briefly :
            </p>
            <div className="h-full">
              <textarea className="w-full h-[75%] p-2 rounded-md align-top border border-[#CCCCCC]" />
            </div>
          </div>
        </div>
      </Steps>
      <Steps stepname="Business case">
        <div className="w-full mt-2 text-[18px]">
          <div className="flex w-full border-b border-[#CCCCCC] mb-2">
            <p className="w-1/3">Gain</p>
            <p className="w-1/3">Current value</p>
            <p className="w-1/3">Target value</p>
          </div>
          <div className="flex items-center w-full mb-2">
            <p className="w-1/3">Budget</p>
            <div className="w-1/3 border mr-2 border-[#CCCCCC] rounded-md">
              <label
                htmlFor="hs-inline-leading-pricing-select-label"
                className="hidden text-sm font-medium mb-2 dark:text-white"
              >
                Price
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-inline-leading-pricing-select-label"
                  name="inline-add-on"
                  className="py-3 px-4 pl-9 pr-9 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                  <span className="text-gray-500">$</span>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center text-gray-500 pr-px">
                  <label
                    htmlFor="hs-inline-leading-select-currency"
                    className="sr-only"
                  >
                    Currency
                  </label>
                  <select
                    id="hs-inline-leading-select-currency"
                    name="hs-inline-leading-select-currency"
                    className="block w-full border-transparent rounded-md focus:ring-blue-600 focus:border-blue-600"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-1/3 border border-[#CCCCCC] rounded-md">
              <label
                htmlFor="hs-inline-leading-pricing-select-label"
                className="hidden text-sm font-medium mb-2 dark:text-white"
              >
                Price
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-inline-leading-pricing-select-label"
                  name="inline-add-on"
                  className="py-3 px-4 pl-9 pr-9 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                  <span className="text-gray-500">$</span>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center text-gray-500 pr-px">
                  <label
                    htmlFor="hs-inline-leading-select-currency"
                    className="sr-only"
                  >
                    Currency
                  </label>
                  <select
                    id="hs-inline-leading-select-currency"
                    name="hs-inline-leading-select-currency"
                    className="block w-full border-transparent rounded-md focus:ring-blue-600 focus:border-blue-600"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full">
            <p className="w-1/3">Savings</p>
            <div className="w-1/3 border mr-2 border-[#CCCCCC] rounded-md">
              <label
                htmlFor="hs-inline-leading-pricing-select-label"
                className="hidden text-sm font-medium mb-2 dark:text-white"
              >
                Price
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-inline-leading-pricing-select-label"
                  name="inline-add-on"
                  className="py-3 px-4 pl-9 pr-9 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                  <span className="text-gray-500">$</span>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center text-gray-500 pr-px">
                  <label
                    htmlFor="hs-inline-leading-select-currency"
                    className="sr-only"
                  >
                    Currency
                  </label>
                  <select
                    id="hs-inline-leading-select-currency"
                    name="hs-inline-leading-select-currency"
                    className="block w-full border-transparent rounded-md focus:ring-blue-600 focus:border-blue-600"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-1/3 border border-[#CCCCCC] rounded-md">
              <label
                htmlFor="hs-inline-leading-pricing-select-label"
                className="hidden text-sm font-medium mb-2 dark:text-white"
              >
                Price
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-inline-leading-pricing-select-label"
                  name="inline-add-on"
                  className="py-3 px-4 pl-9 pr-9 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                  <span className="text-gray-500">$</span>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center text-gray-500 pr-px">
                  <label
                    htmlFor="hs-inline-leading-select-currency"
                    className="sr-only"
                  >
                    Currency
                  </label>
                  <select
                    id="hs-inline-leading-select-currency"
                    name="hs-inline-leading-select-currency"
                    className="block w-full border-transparent rounded-md focus:ring-blue-600 focus:border-blue-600"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {inputList.map((_, index) => (
          <div key={index} className="flex w-full mt-2">
            <div className="w-1/3 rounded-md">
              <input
                type="text"
                id="hs-inline-leading-pricing-select-label"
                name="inline-add-on"
                className="mr-[8px] py-3 px-2 block w-[95%] border border-[#CCCCCC] shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/3 mr-2 border border-[#CCCCCC] rounded-md">
              <label
                htmlFor="hs-inline-leading-pricing-select-label"
                className="hidden text-sm font-medium mb-2 dark:text-white"
              >
                Price
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-inline-leading-pricing-select-label"
                  name="inline-add-on"
                  className="py-3 px-4 pl-9 pr-9 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                  <span className="text-gray-500">$</span>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center text-gray-500 pr-px">
                  <label
                    htmlFor="hs-inline-leading-select-currency"
                    className="sr-only"
                  >
                    Currency
                  </label>
                  <select
                    id="hs-inline-leading-select-currency"
                    name="hs-inline-leading-select-currency"
                    className="block w-full border-transparent rounded-md focus:ring-blue-600 focus:border-blue-600"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-1/3 border border-[#CCCCCC] rounded-md">
              <label
                htmlFor="hs-inline-leading-pricing-select-label"
                className="hidden text-sm font-medium mb-2 dark:text-white"
              >
                Price
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-inline-leading-pricing-select-label"
                  name="inline-add-on"
                  className="py-3 px-4 pl-9 pr-9 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                  <span className="text-gray-500">$</span>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center text-gray-500 pr-px">
                  <label
                    htmlFor="hs-inline-leading-select-currency"
                    className="sr-only"
                  >
                    Currency
                  </label>
                  <select
                    id="hs-inline-leading-select-currency"
                    name="hs-inline-leading-select-currency"
                    className="block w-full border-transparent rounded-md focus:ring-blue-600 focus:border-blue-600"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={handleAddmore}
          className="mt-4 text-[18px] bg-[#001F3E] rounded-xl w-full text-white h-10"
        >
          Add more+
        </button>
      </Steps>
      <Steps stepname="Project team">
        <div className="w-full mt-2 text-[18px]">
          <div className="flex items-end w-full border-b border-[#CCCCCC] mb-2">
            <p className="w-1/3 text-[18px]">Role</p>
            <p className="w-1/3 ml-2 text-[18px]">Name</p>
            <p className="w-1/3 text-[18px]">Estimated time on the project</p>
          </div>
          <div className="flex mb-2">
            <p className="mr-[8px] py-2 px-0 w-[95%]">Project sponsor</p>
            <input
              type="text"
              id="hs-inline-leading-pricing-select-label"
              name="inline-add-on"
              className="mr-[8px] pl-2 py-2 block w-[95%] border border-[#CCCCCC] shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            />
            <input
              type="text"
              id="hs-inline-leading-pricing-select-label"
              name="inline-add-on"
              className="py-2 pl-2 block w-[95%] border border-[#CCCCCC] shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="flex mb-2">
            <p className="mr-[8px] py-2 px-0 w-[95%]">Project sponsor</p>
            <input
              type="text"
              id="hs-inline-leading-pricing-select-label"
              name="inline-add-on"
              className="mr-[8px] pl-2 py-2 block w-[95%] border border-[#CCCCCC] shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            />
            <input
              type="text"
              id="hs-inline-leading-pricing-select-label"
              name="inline-add-on"
              className="py-2 pl-2 block w-[95%] border border-[#CCCCCC] shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="flex mb-2">
            <p className="mr-[8px] py-2 px-0 w-[95%]">Stakeholders</p>
            <input
              type="text"
              id="hs-inline-leading-pricing-select-label"
              name="inline-add-on"
              className="mr-[8px] pl-2 py-2 block w-[95%] border border-[#CCCCCC] shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            />
            <input
              type="text"
              id="hs-inline-leading-pricing-select-label"
              name="inline-add-on"
              className="py-2 pl-2 block w-[95%] border border-[#CCCCCC] shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="flex mb-2">
            <p className="mr-[8px] py-2 px-0 w-[95%]">Member 1</p>
            <input
              type="text"
              id="hs-inline-leading-pricing-select-label"
              name="inline-add-on"
              className="mr-[8px] pl-2 py-2 block w-[95%] border border-[#CCCCCC] shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            />
            <input
              type="text"
              id="hs-inline-leading-pricing-select-label"
              name="inline-add-on"
              className="py-2 pl-2 block w-[95%] border border-[#CCCCCC] shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {inputList2.map((_, index) => (
            <div key={index} className="flex mb-2">
              <div className="w-1/3">
                <input
                  type="text"
                  id="hs-inline-leading-pricing-select-label"
                  name="inline-add-on"
                  className="w-[95%] pl-2 py-2 block border border-[#CCCCCC] shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="w-1/3 mr-2">
                <input
                  type="text"
                  id="hs-inline-leading-pricing-select-label"
                  name="inline-add-on"
                  className="pl-2 py-2 block w-[100%] border border-[#CCCCCC] shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="w-1/3">
                <input
                  type="text"
                  id="hs-inline-leading-pricing-select-label"
                  name="inline-add-on"
                  className="py-2 pl-2 block w-[100%] border border-[#CCCCCC] shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          ))}
          <button
            onClick={handleAddmore2}
            className="mt-4 text-[18px] bg-[#001F3E] rounded-xl w-full text-white h-10"
          >
            Add more+
          </button>
        </div>
      </Steps>
      <Steps stepname="Plan">
        <div className="flex w-full mt-2 text-[18px]">
          <div className="grid gap-2 w-[20%] mr-10">
            <p className="flex justify-end items-center">Phases</p>
            <p className="flex justify-end items-center">Define</p>
            <p className="flex justify-end items-center">Measure</p>
            <p className="flex justify-end items-center">Analyze</p>
            <p className="flex justify-end items-center">Improve</p>
            <p className="flex justify-end items-center">Control</p>
          </div>
          <div className="grid grid-rows-6 grid-flow-col gap-2 w-[80%]">
            <p className="w-full flex items-center">Expected deliverable</p>
            <input
              className="w-full rounded-md border border-[#CCCCCC] p-2 "
              type="text"
            />
            <input
              className="w-full rounded-md border border-[#CCCCCC] p-2 "
              type="text"
            />
            <input
              className="w-full rounded-md border border-[#CCCCCC] p-2 "
              type="text"
            />
            <input
              className="w-full rounded-md border border-[#CCCCCC] p-2 "
              type="text"
            />
            <input
              className="w-full rounded-md border border-[#CCCCCC] p-2 "
              type="text"
            />
            <p className="w-full flex items-center">Start and end date</p>
            <DatePickerWithRange className="w-full h-full" />
            <DatePickerWithRange className="w-full h-full" />
            <DatePickerWithRange className="w-full h-full" />
            <DatePickerWithRange className="w-full h-full" />
            <DatePickerWithRange className="w-full h-full" />
          </div>
        </div>
      </Steps>
    </div>
  );
};

export default Definingtheproblem;
