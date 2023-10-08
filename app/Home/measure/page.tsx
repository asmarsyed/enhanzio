"use client"
import Navbar from "@/app/components/navbar"

export default function Measure() {
    return (
        <div className="mt-6 mx-6">
            <h1 className="text-xl font-bold">
                Measure
            </h1>
            <p className="text-gray-500 mt-4">
                In the realm of Lean Six Sigma improvement, the "Define" phase serves as your project's launchpad. Here, you lay the groundwork for success. It's the crucial first step on your journey towards process enhancement.
            </p>

            <p className="text-gray-500 mt-4">
                1. Identify existing data : What information you have to measure for this project ? What is the information system?
            </p>

            <input className="w-full mt-4 border border-gray-400 rounded-sm p-2 shadow-md" type="text" placeholder="Information system"/>

            <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

            <p className="text-gray-500 mt-4">
                2. Prepare data collection : We'll need a collection plan. You will also need a measurement protocol. For the measurement protocol, you can use the 5W2H method (Why ? What ? Whese ? When ? Who ? How ? How much ?)
            </p>

            <div className="flex w-full">
        <div className="w-1/4 mt-4">
          <div className="p-2 border border-gray-400 ">Why ?</div>
          <div className="p-2 border border-gray-400 ">What ?</div>
          <div className="p-2 border border-gray-400 ">Whese ?</div>
          <div className="p-2 border border-gray-400 ">When ?</div>
          <div className="p-2 border border-gray-400 ">Who ?</div>
          <div className="p-2 border border-gray-400 ">How ?</div>
          <div className="p-2 border border-gray-400 ">How much ?</div>
        </div>

        <div className="flex flex-col w-3/4 mt-4">
        <input className="border border-gray-400 p-2" type="text" placeholder=""/>
        <input className="border border-gray-400 p-2" type="text" placeholder=""/>
        <input className="border border-gray-400 p-2" type="text" placeholder=""/>
        <input className="border border-gray-400 p-2" type="text" placeholder=""/>
        <input className="border border-gray-400 p-2" type="text" placeholder=""/>
        <input className="border border-gray-400 p-2" type="text" placeholder=""/>
        <input className="border border-gray-400 p-2" type="text" placeholder=""/>
        </div>
      </div>

      <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

        <p className="text-gray-500 mt-4">
                3. Verify the measure system : It is important to have datas without mistakes. To verify the datas, Kappa or R&R can be used to verify datas.
        </p>

        <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

        <p className="text-gray-500 mt-4">
                4. Collecting the datas : It&rsquos now time to collect the datas that you identified and prepare for.
        </p>

        <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

        <p className="text-gray-500 mt-4">
                5. Now you need to exploit the datas. To do this, you can describe the appearance of the data using tables, graphs, histograms, etc.
        </p>

        <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

        <p className="text-gray-500 mt-4">
                6. Evaluating process capability : By calculating the Cp and Cpk
        </p>

        <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

        <p className="text-gray-500 mt-4">
                7. End-of-phase review : In this last step, you can adjust the project chart if you need and also the communication plan.
        </p>

        <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>


        </div>
    )
}