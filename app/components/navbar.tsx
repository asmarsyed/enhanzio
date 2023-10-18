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

export default function Navbar() {
  const [expanded, setExpanded] = useState(true);

  const [active, setActive] = useState("");

  return (
    <div className="flex max-md:hidden">
      <div
        className={`h-screen ${
          expanded
            ? "w-[222px] transition-all ease-in-out"
            : "w-[86px] transition-all ease-in-out"
        }`}
      ></div>

      <aside
        className={`fixed h-screen border-r border-gray-200 ${
          expanded
            ? "w-[222px] transition-all ease-in-out"
            : "w-[86px] transition-all ease-in-out"
        }`}
      >
        <nav>
          <div className="p-4 pb-2 flex justify-between items-center mb-2 h-14">
            {expanded ? (
              <Link href="/">
                <img
                  className="ml-2 h-9"
                  src="/Enhanzio.png"
                  alt="Logo Enhanzio"
                />
              </Link>
            ) : (
              <p className="h-6"></p>
            )}
            <button onClick={() => setExpanded((curr) => !curr)}>
              {expanded ? (
                <svg
                  className="w-4 h-4 text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-gray-700 mr-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                  />
                </svg>
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
      </aside>
    </div>
  );
}
