"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/dist/client/link'


const Define = () => {

  const [next1, setNext1] = useState(true)

  return (
    <div className="mt-6 mx-6">
      <h1 className="text-xl font-bold">
        Define
      </h1>
      <p className="text-gray-500 mt-4">
        In the realm of Lean Six Sigma improvement, the &apos;Define&apos; phase serves as your project&apos;s launchpad. Here, you lay the groundwork for success. It&apos;s the crucial first step on your journey towards process enhancement.
      </p>

      <p className="text-gray-500 mt-4">
        1. Defining the problem : What challenge or opportunity do you seek to address? It&apos;s about pinpointing the core problem that needs solving or the process that requires optimization.
      </p>

      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder="Define the problem"/>


      <div className="flex">
      <button className="transition-all ease-in-out mt-4 mr-4 border bg-orange-500 text-white rounded-xl p-2 hover:bg-orange-700">Previous step</button>

      <button onClick={() => setNext1((curr) => !curr)} className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>
      </div>

      {next1 ?

      <p></p>
      :
      <>
      <p className="text-gray-500 mt-4">
            2. Identifying what the customers want and serving priorities to their needs. That is what we call the Voice Of the Customer (VOC)
      </p>
      
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder="Voice Of the Customer (VOC)" /><button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>
      </>

      }
      

      <p className="text-gray-500 mt-4">
        3. Defining the project objective. 
      </p>

      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder="Project objective"/>

      <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

      <p className="text-gray-500 mt-4">
        4. To define the project&apos;s scope, this step involves using the SIPOC tool, which stands for Supplier, Input, Process, Output, Customer.  SIPOC is a visual framework commonly used in process improvement, breaking down a process into key components for a high-level understanding.
      </p>

      <div className="grid grid-cols-5 gap-1">

      <div className="w-full mt-4 border bg-gray-200 border-gray-400 p-2 shadow-md text-gray-600 font-bold text-center">Supplier</div>
      <div className="w-full mt-4 border bg-gray-200 border-gray-400 p-2 shadow-md text-gray-600 font-bold text-center">Input</div>
      <div className="w-full mt-4 border bg-gray-200 border-gray-400 p-2 shadow-md text-gray-600 font-bold text-center">Process</div>
      <div className="w-full mt-4 border bg-gray-200 border-gray-400 p-2 shadow-md text-gray-600 font-bold text-center">Output</div>
      <div className="w-full mt-4 border bg-gray-200 border-gray-400 p-2 shadow-md text-gray-600 font-bold text-center">Customer</div>

      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder=""/>
      

      </div>

      <button className="transition-all ease-in-out mt-4 border w-full bg-gray-300 text-gray-600 rounded-xl p-2 hover:bg-gray-400">+Add more</button>

      <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

      <p className="text-gray-500 mt-4">
        Define now the scope of the project
      </p>

      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder="In Scope"/>

      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder="Out Scope"/>

      <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

      <p className="text-gray-500 mt-4">
        5. Defining the business case, which involves specifying the budget and calculating the potential cost savings achievable through this project. This financial aspect clarifies the project&apos;s economic impact and feasibility.
      </p>

      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder="Budget"/>

      <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder="Savings"/>

      <button className="transition-all ease-in-out mt-4 border w-full bg-gray-300 text-gray-600 rounded-xl p-2 hover:bg-gray-400">+Add more</button>

      <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

      <p className="text-gray-500 mt-4">
        6. Defining the team for your DMAIC project :
      </p>

      <div className="flex w-full">
        <div className="w-1/4 mt-4">
          <div className="p-2 border border-gray-400 ">Team leader</div>
          <div className="p-2 border border-gray-400 ">Team members</div>
          <div className="p-2 border border-gray-400 ">Sponsor</div>
          <div className="p-2 border border-gray-400 ">Stakeholders</div>
        </div>

        <div className="flex flex-col w-3/4 mt-4">
        <input className="border border-gray-400 p-2" type="text" placeholder="Full name"/>
        <input className="border border-gray-400 p-2" type="text" placeholder="Full name"/>
        <input className="border border-gray-400 p-2" type="text" placeholder="Full name"/>
        <input className="border border-gray-400 p-2" type="text" placeholder="Full name"/>
        </div>
      </div>
      <button className="transition-all ease-in-out mt-4 border w-full bg-gray-300 text-gray-600 rounded-xl p-2 hover:bg-gray-400">+Add more</button>

      <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

      <p className="text-gray-500 mt-4">
        The last step of the Define phase is to plan your project.
      </p>

      

      <Link href="/Home/planning">
        <button className="transition-all ease-in-out mt-4 border w-full bg-gray-300 text-gray-600 rounded-xl p-2 hover:bg-gray-400 mb-8">Plan the project</button>
      </Link>



    </div>
  )
}

export default Define