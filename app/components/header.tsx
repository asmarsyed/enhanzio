"use client"
import React, { useRef } from 'react'

export default function Header() {
    return (
        <div className="fixed top-0 inline-flex items-center place-content-between w-full bg-gray-800 h-14 border-black">
            <div className="flex h-12 items-center">
            <img className="h-10 ml-4" src="/favicon.ico" alt="Logo" />
            <a href="/" id="Logo" className="text-white ml-2">
                Enhanzio
            </a>
            </div>
            <a href="" className="text-white mr-4">
                Login
            </a>
        </div>
    )
}