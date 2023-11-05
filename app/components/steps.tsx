"use client"

import React from "react";

interface StepProps {
  stepname: string;
  children: any;
}

const Steps: React.FC<StepProps> = ({ children, stepname }) => {
  return (
    <div className="bg-white p-[35px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="bg-[#F3F7FC] rounded-xl p-4">
        <div className="px-[35px] py-[20px]">
          <h1 className="font-bold text-[20px] text-[#001F3E]">{stepname}</h1>
          <div className="h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
