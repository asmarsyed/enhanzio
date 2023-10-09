"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'

export default function Header() {
    return (
        <div className="fixed top-0 flex justify-center items-center w-full bg-white h-16 border-b border-gray-300">
            <div className="fixed top-0 inline-flex items-center place-content-between border-b border-gray-300 w-full md:max-w-[1300px] bg-white h-16">
                <div className="flex h-12 items-center w-[1300px]">
                    <Link href="/">
                    <img className="h-8 ml-4" src="/Enhanzio.png" alt="Logo" />
                    </Link>
                </div>
                <div className="flex">
                    <a href="" className="text-gray mr-4">
                        DMAIC
                    </a>
                    <a href="" className="text-gray mr-4">
                        Testimonials
                    </a>
                    <a href="" className="text-gray mr-4">
                        Demo
                    </a>
                    <Link href="/pricing" className="text-gray mr-4">
                        Pricing
                    </Link>
                    <a href="" className="text-gray mr-4">
                        Login
                    </a>
                </div>
            </div>
        </div>
    )
}