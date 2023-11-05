"use client";
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  createContext,
  useContext,
} from "react";
import Link from "next/link";
import Menunavbar from "./menunavbar";
import { link } from "fs";

const Navbar = () => {
  const [expanded, setExpanded] = useState(true);

  const [active, setActive] = useState("");

  return (
    <div className="flex bg-white shadow-2xl border-r max-md:hidden ">
      <div
        className={`h-screen ${
          expanded
            ? "w-[300px] transition-all ease-in-out"
            : "w-[105px] transition-all ease-in-out"
        }`}
      ></div>

      <div
        className={`fixed h-screen ${
          expanded
            ? "fixed w-[300px] transition-all ease-in-out"
            : "fixed w-[105px] transition-all ease-in-out"
        }`}
      >
        <nav>
          <div className="p-4 pb-2 flex items-center mb-2 h-[82px]">
            <button
              className="flex items-center justify-center w-full"
              onClick={() => setExpanded((curr) => !curr)}
            >
              {expanded ? (
                <svg
                  className="absolute left-[42px] w-[24px] h-[24px] text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              ) : (
                <svg
                  className="fixed left-[42px] w-[24px] h-[24px] text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
              {expanded ? (
                <Link href="/">
                  <img
                    className="ml-12 h-[40px]"
                    src="/Enhanzio.png"
                    alt="Logo Enhanzio"
                  />
                </Link>
              ) : (
                <p className="h-6"></p>
              )}
            </button>
          </div>
          <div className="border-t border-black/10 py-2"></div>
          <ul>
            <Menunavbar
              name="Planning"
              link="/Home/planning"
              expanded={expanded}
              icon="Planning"
            />
            <Menunavbar
              name="Dashboard"
              link="/Home/dashboard"
              expanded={expanded}
              icon="Dashboard"
            />
            <Menunavbar
              name="Kanban"
              link="/Home/kanban"
              expanded={expanded}
              icon="Kanban"
            />
            <Menunavbar
              name="Define"
              link="/Home/define"
              expanded={expanded}
              icon="Define"
            />
            <Menunavbar
              name="Measure"
              link="/Home/measure"
              expanded={expanded}
              icon="Measure"
            />
            <Menunavbar
              name="Analyze"
              link="/Home/analyze"
              expanded={expanded}
              icon="Analyze"
            />
            <Menunavbar
              name="Improve"
              link="/Home/improve"
              expanded={expanded}
              icon="Improve"
            />
            <Menunavbar
              name="Control"
              link="/Home/control"
              expanded={expanded}
              icon="Control"
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
