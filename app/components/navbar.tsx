"use client"
import React, { useState, useEffect, useCallback, useRef, createContext, useContext } from 'react';
import Link from 'next/link'

const NavbarContext = createContext({})

export default function Navbar() {

    const [expanded, setExpanded] = useState(true)


return (
    <>
    <aside className={`h-screen border-r border-gray-200 ${expanded ? "w-[222px] transition-all ease-in-out" : "w-[88px] transition-all ease-in-out"}`}>
        <nav>
            <div className="p-4 pb-2 flex justify-between items-center mb-2">
                {expanded ?
                <img className="ml-2 h-6" src="/Enhanzio.png" alt="Logo Enhanzio" />
                : <p className="h-6"></p>
                }       
                <button onClick={() => setExpanded((curr) => !curr)} >
                    {expanded ? 
                    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                    </svg> : 

                    <svg className="w-4 h-4 text-gray-700 mr-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                    </svg>
                    }
                </button>
            </div>
            <div className="border-t border-black/10 py-2">
            </div>
            <ul>
                <Link href="/Home/planning">
                    <li className={`pl-2 w-[205px] rounded-md ml-2 mr-2 mb-2 flex ${expanded ? "hover:bg-gray-100 " : ""}`}>
                    <div className={`px-2 py-1 ${expanded ? "" : "transition-all ease-in-out hover:bg-gray-100 text-white rounded-md"}`}>
                    <svg className={`m-2 w-[20px] h-[24px] text-gray-500 ${expanded ? "" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z"/>
                    </svg>
                    </div>
                    { expanded ?
                    <p className="flex justify-center items-center text-gray-500 ml-2">Planning</p>
                    : <p></p>
                    }
                    </li>
                </Link>
                <Link href="/Home/dashboard">
                    <li className={`pl-2 w-[205px] rounded-md ml-2 mr-2 mb-2 flex ${expanded ? "hover:bg-gray-100 " : ""}`}>
                    <div className={`px-2 py-1 ${expanded ? "" : "hover:bg-gray-100 rounded-md"}`}>
                    <svg className={`m-2 w-[20px] h-[24px] text-gray-500 ${expanded ? "" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1v14h16m0-9-3-2-3 5-3-2-3 4"/>
                    </svg>
                    </div>
                    { expanded ?
                    <p className="flex justify-center items-center text-gray-500 ml-2">Dashboard</p>
                    : <p></p>
                    }
                    </li>
                </Link>
                <Link href="/Home/define">
                    <li className={`pl-2 w-[205px] rounded-md ml-2 mr-2 mb-2 flex ${expanded ? "hover:bg-gray-100 " : ""}`}>
                    <div className={`px-2 py-1 ${expanded ? "" : "hover:bg-gray-100 rounded-md"}`}>
                        <p className="flex w-5 h-6 m-2 font-bold text-gray-500 float-left text-center text-xl justify-center items-center">
                            D
                        </p>
                        </div>
                        <img src="" alt="" />
                        { expanded ?
                        <p className="flex justify-center items-center text-gray-500 ml-2">Define</p>
                        : <p></p>
                        }
                    </li>
                </Link>
                <Link href="/Home/measure">
                    <li className={`pl-2 w-[205px] rounded-md ml-2 mr-2 mb-2 flex ${expanded ? "hover:bg-gray-100 " : ""}`}>
                    <div className={`px-2 py-1 ${expanded ? "" : "hover:bg-gray-100 rounded-md"}`}>
                        <p className="flex w-5 h-6 m-2 font-bold text-gray-500 float-left text-center text-xl justify-center items-center">
                            M
                        </p>
                        </div>
                        <img src="" alt="" />
                        { expanded ?
                        <p className="flex justify-center items-center text-gray-500 ml-2">Measure</p>
                        : <p></p>
                        }
                    </li>
                </Link>
                <Link href="/Home/analyze">
                    <li className={`pl-2 w-[205px] rounded-md ml-2 mr-2 mb-2 flex ${expanded ? "hover:bg-gray-100 " : ""}`}>
                    <div className={`px-2 py-1 ${expanded ? "" : "hover:bg-gray-100 rounded-md"}`}>
                        <p className="flex w-5 h-6 m-2 font-bold text-gray-500 float-left text-center text-xl justify-center items-center">
                            A
                        </p>
                        </div>
                        <img src="" alt="" />
                        { expanded ?
                        <p className="flex justify-center items-center text-gray-500 ml-2">Analyze</p>
                        : <p></p>
                        }
                    </li>
                </Link>
                <Link href="/Home/improve">
                    <li className={`pl-2 w-[205px] rounded-md ml-2 mr-2 mb-2 flex ${expanded ? "hover:bg-gray-100 " : ""}`}>
                    <div className={`px-2 py-1 ${expanded ? "" : "hover:bg-gray-100 rounded-md"}`}>
                        <p className="flex w-5 h-6 m-2 font-bold text-gray-500 float-left text-center text-xl justify-center items-center">
                            I
                        </p>
                        </div>
                        <img src="" alt="" />
                        { expanded ?
                        <p className="flex justify-center items-center text-gray-500 ml-2">Improve</p>
                        : <p></p>
                        }
                    </li>
                </Link>
                <Link href="/Home/control">
                    <li className={`pl-2 w-[205px] rounded-md ml-2 mr-2 mb-2 flex ${expanded ? "hover:bg-gray-100 " : ""}`}>
                    <div className={`px-2 py-1 ${expanded ? "" : "hover:bg-gray-100 rounded-md"}`}>
                        <p className="flex w-5 h-6 m-2 font-bold text-gray-500 float-left text-center text-xl justify-center items-center">
                            C
                        </p>
                        </div>
                        <img src="" alt="" />
                        { expanded ?
                        <p className="flex justify-center items-center text-gray-500 ml-2">Control</p>
                        : <p></p>
                        }
                    </li>
                </Link>
            </ul>
        </nav>
    </aside>
    </>
)
}