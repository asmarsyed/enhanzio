import React, { useState } from "react";
import Link from "next/link";

interface MenunavbarProps {
  name: any;
  link: any;
  expanded: boolean;
  icon: any;
}

const Manunavbar: React.FC<MenunavbarProps> = ({
  name,
  link,
  expanded,
  icon,
}) => {
  return (
    <div>
      <Link href={link}>
        <li
          className={`pl-2 rounded-md ml-2 mr-2 mb-2 flex ${
            expanded ? "hover:bg-gray-100 " : "w-0"
          }`}
        >
          <div
            className={`px-2 py-1 ${
              expanded ? "" : "hover:bg-gray-100 rounded-md"
            }`}
          >
            {icon === "Planning" ? (
              <svg
                className={`m-2 w-[20px] h-[24px] text-gray-500 ${
                  expanded ? "" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z"
                />
              </svg>
            ) : icon === "Dashboard" ? (
              <svg
                className={`m-2 w-[20px] h-[24px] text-gray-500 ${
                  expanded ? "" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1v14h16m0-9-3-2-3 5-3-2-3 4"
                />
              </svg>
            ) : icon === "Kanban" ? (
              <svg
                className={`m-2 w-[20px] h-[24px] text-gray-500 ${
                  expanded ? "" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3V0H2Zm16 0h-3v16h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 0H7v16h6V0Z" />
              </svg>
            ) : icon === "Define" ? (
              <p className="flex w-5 h-6 m-2 font-bold text-gray-500 float-left text-center text-xl justify-center items-center">
                D
              </p>
            ) : icon === "Measure" ? (
              <p className="flex w-5 h-6 m-2 font-bold text-gray-500 float-left text-center text-xl justify-center items-center">
                M
              </p>
            ) : icon === "Analyze" ? (
              <p className="flex w-5 h-6 m-2 font-bold text-gray-500 float-left text-center text-xl justify-center items-center">
                A
              </p>
            ) : icon === "Improve" ? (
              <p className="flex w-5 h-6 m-2 font-bold text-gray-500 float-left text-center text-xl justify-center items-center">
                I
              </p>
            ) : icon === "Control" ? (
              <p className="flex w-5 h-6 m-2 font-bold text-gray-500 float-left text-center text-xl justify-center items-center">
                C
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <img src="" alt="" />
          {expanded ? (
            <p className="flex justify-center items-center text-gray-500 ml-2">
              {name}
            </p>
          ) : (
            <p></p>
          )}
        </li>
      </Link>
    </div>
  );
};

export default Manunavbar;
