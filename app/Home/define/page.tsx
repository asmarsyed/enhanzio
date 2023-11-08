"use client";

import React, { useEffect } from "react";
import { useState, useRef, useReducer } from "react";
import Link from "next/dist/client/link";
import Sipoc from "@/app/components/define/SIPOC/Sipoc";
import Budget from "@/app/components/Businesscase/budget";
import Etapes from "@/app/components/stepsbar";
import Steps from "@/app/components/steps";
import Activityheader from "@/app/components/activity/activityheader";
import Activitydate from "@/app/components/activity/activitydate";
import Activityupdate from "@/app/components/activity/activityupdate";
import Definingtheproblem from "@/app/components/definingtheproblem";
import Delimitingtheprocess from "@/app/components/delimitingtheprocess";
import Customerrequirements from "@/app/components/customerrequirements";
import { Gonogodefine } from "@/app/components/Gonogodefine";

interface Step {
  number: number;
  status: string;
  active: boolean;
}

const Define = () => {
  const [stepnumber, setStepnumber] = useState(1);
  const [steps, setSteps] = useState([
    { number: 1, status: "In progress", active: true },
    { number: 2, status: "To do", active: false },
    { number: 3, status: "To do", active: false },
    { number: 4, status: "To do", active: false },
  ]);

  useEffect(() => {
    if (stepnumber === 1) {
      setSteps([
        { number: 1, status: "In progress", active: true },
        { number: 2, status: "To do", active: false },
        { number: 3, status: "To do", active: false },
        { number: 4, status: "To do", active: false },
      ]);
    } else if (stepnumber === 2) {
      setSteps([
        { number: 1, status: "Done", active: false },
        { number: 2, status: "In progress", active: true },
        { number: 3, status: "To do", active: false },
        { number: 4, status: "To do", active: false },
      ]);
    } else if (stepnumber === 3) {
      setSteps([
        { number: 1, status: "Done", active: false },
        { number: 2, status: "Done", active: false },
        { number: 3, status: "In progress", active: true },
        { number: 4, status: "To do", active: false },
      ]);
    } else if (stepnumber === 4) {
      setSteps([
        { number: 1, status: "Done", active: false },
        { number: 2, status: "Done", active: false },
        { number: 3, status: "Done", active: false },
        { number: 4, status: "In progress", active: true },
      ]);
    }
  }, [stepnumber]);

  return (
    <div className="pt-[30px] mt-24 md:mx-10 mx-2 w-full flex transition-all border-xl">
      <div className=" bg-white w-full rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="flex bg-white rounded-xl">
          <Etapes
            stepnumber="1"
            stepname="Project Chart"
            stepstatus={steps[0].status}
            stepposition="Left"
            stepactive={steps[0].active}
          />
          <Etapes
            stepnumber="2"
            stepname="Delimiting the process"
            stepstatus={steps[1].status}
            stepposition="Middle"
            stepactive={steps[1].active}
          />
          <Etapes
            stepnumber="3"
            stepname="Customer Requirements"
            stepstatus={steps[2].status}
            stepposition="Middle"
            stepactive={steps[2].active}
          />
          <Etapes
            stepnumber="4"
            stepname="Go / No Go"
            stepstatus={steps[3].status}
            stepposition="Right"
            stepactive={steps[3].active}
          />
        </div>
        {stepnumber === 1 ? (
          <Definingtheproblem />
        ) : stepnumber === 2 ? (
          <Delimitingtheprocess />
        ) : stepnumber === 3 ? (
          <Customerrequirements />
        ) : stepnumber === 4 ? (
          <Gonogodefine />
        ) : (
          <p></p>
        )}

        <div className="flex justify-end w-full">
          {stepnumber > 1 ? (
            <button
              onClick={() => {
                setStepnumber((curr) => curr - 1);
              }}
              className="bg-white text-[#001F3E] px-6 py-1 mt-[30px] mb-[30px] mr-[25px] rounded-md border border-[#001F3E]"
            >
              Previous step
            </button>
          ) : (
            <p></p>
          )}
          {stepnumber >= 1 && stepnumber <= 3 ? (
            <button
              onClick={() => {
                setStepnumber((curr) => curr + 1);
              }}
              className=" bg-[#001F3E] rounded-md text-white px-6 py-1 mt-[30px] mb-[30px] mr-[35px]"
            >
              Next step
            </button>
          ) : (
            <button className=" bg-[#001F3E] rounded-md text-white px-6 py-1 mt-[30px] mb-[30px] mr-[35px]">
              Next phase
            </button>
          )}
        </div>
      </div>

      <div className="w-[30%] ml-6 bg-white rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-md:hidden">
        <Activityheader />
        <Activitydate />
        <Activityupdate />
      </div>
    </div>
  );
};

export default Define;
