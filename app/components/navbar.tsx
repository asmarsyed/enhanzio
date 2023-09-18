"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link'

export default function Navbar() {


return (
    <>
    <aside className="h-screen w-40">
        <nav>
            <div className="p-4 pb-2 flex justify between items-center">
                <img className="h-10" src="Logo Enhanzio.png" alt="Logo Enhanzio" />
                <button>&#12296;</button>
            </div>
            <ul>
                <li>
                    <Link href="/Home/planning">Planning</Link>
                </li>
                <li>
                    <Link href="/Home/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link href="Home/define">Define</Link>
                </li>
                <li>
                    <Link href="Home/measure">Measure</Link>
                </li>
                <li>
                    <Link href="Home/analyze">Analyze</Link>
                </li>
                <li>
                    <Link href="Home/identify">Identify</Link>
                </li>
                <li>
                    <Link href="Home/control">Control</Link>
                </li>
            </ul>
        </nav>
    </aside>
    </>
)
}

