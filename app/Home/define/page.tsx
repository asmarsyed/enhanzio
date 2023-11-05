"use client";

import React from "react";
import { useState, useRef } from "react";
import Link from "next/dist/client/link";
import Sipoc from "@/app/components/define/SIPOC/Sipoc";
import Budget from "@/app/components/Businesscase/budget";
import Etapes from "@/app/components/stepsbar";
import Steps from "@/app/components/steps";
import Activityheader from "@/app/components/activity/activityheader";
import Activitydate from "@/app/components/activity/activitydate";
import Activityupdate from "@/app/components/activity/activityupdate";

const Define = () => {
  return (
    <div className="pt-[30px] mt-24 md:mx-10 mx-2 w-full flex transition-all border-xl">
      <div className="w-full">
        <div className="flex bg-white rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Etapes
            stepnumber="1"
            stepname="Project Chart"
            stepstatus="Done"
            stepposition="Left"
            stepactive={false}
          />
          <Etapes
            stepnumber="2"
            stepname="Delimiting the process"
            stepstatus="In progress"
            stepposition="Middle"
            stepactive={true}
          />
          <Etapes
            stepnumber="3"
            stepname="Customer Requirements"
            stepstatus="To do"
            stepposition="Middle"
            stepactive={false}
          />
          <Etapes
            stepnumber="4"
            stepname="Go / No Go"
            stepstatus="To do"
            stepposition="Right"
            stepactive={false}
          />
        </div>
        <div>
          <Steps stepname="Defining the problem">
            <div className="flex w-full h-full">
              <div className="w-1/2 mr-[45px]">
                <p className="mb-4 mt-2 text-[18px]">
                  Defining the problem with the 5W2H method
                </p>
                <div className="flex justify-end items-center flex-auto mb-4">
                  <p className="mr-2 text-[18px]">What ?</p>
                  <input
                    className="h-[34px] w-[75%] flex items-center p-2 rounded-md border"
                    type="text"
                  />
                </div>
                <div className="flex justify-end items-center flex-auto mb-4">
                  <p className="mr-2 text-[18px]">Where ?</p>
                  <input
                    className="h-[34px] w-[75%] flex items-center p-2 rounded-md border"
                    type="text"
                  />
                </div>
                <div className="flex justify-end items-center flex-auto mb-4">
                  <p className="mr-2 text-[18px]">When ?</p>
                  <input
                    className="h-[34px] w-[75%] flex items-center p-2 rounded-md border"
                    type="text"
                  />
                </div>
                <div className="flex justify-end items-center flex-auto mb-4">
                  <p className="mr-2 text-[18px]">Who ?</p>
                  <input
                    className="h-[34px] w-[75%] flex items-center p-2 rounded-md border"
                    type="text"
                  />
                </div>
                <div className="flex justify-end items-center flex-auto mb-4">
                  <p className="mr-2 text-[18px]">Why ?</p>
                  <input
                    className="h-[34px] w-[75%] flex items-center p-2 rounded-md border"
                    type="text"
                  />
                </div>
                <div className="flex justify-end items-center flex-auto mb-4">
                  <p className="mr-2 text-[18px]">How ?</p>
                  <input
                    className="h-[34px] w-[75%] flex items-center p-2 rounded-md border"
                    type="text"
                  />
                </div>
                <div className="flex justify-end items-center flex-auto mb-4">
                  <p className="mr-2 text-[18px]">How much ?</p>
                  <input
                    className="h-[34px] w-[75%] flex items-center p-2 rounded-md border"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <p className="text-[18px] mt-2 mb-4">
                  Now define the problem briefly :
                </p>
                <div className="h-full">
                  <input
                    className="w-full h-[80%] p-2 rounded-md align-text-top"
                    type="text"
                    placeholder="ff"
                  />
                </div>
              </div>
            </div>
          </Steps>
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
