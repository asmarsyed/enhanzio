"use client"
import Navbar from "@/app/components/navbar"

export default function Improve() {
    return (
        <div className="mt-6 mx-6">
            <h1 className="text-xl font-bold">
                Improve
            </h1>
            <p className="text-gray-500 mt-4">
                The 'Improve' phase is where innovation and transformation come to life. Here, you develop and implement solutions, making tangible changes to your process to achieve better outcomes.
            </p>

            <p className="text-gray-500 mt-4">
                1. Finding solutions : Brainstorming using Ishikawa, 5W2H, 
            </p>

            <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

            <p className="text-gray-500 mt-4">
                2. Choosing the solutions : Pugh Matrix
            </p>

            <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

            <p className="text-gray-500 mt-4">
                3. Analyzing solutions risks : FMEA
            </p>

            <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

            <p className="text-gray-500 mt-4">
                4. Plan solution implementation : 5S, KAIZEN, SMED, PDCA
            </p>

            <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

            <p className="text-gray-500 mt-4">
                5. Solution implementation : Poka Yoke, Tests
            </p>

            <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

            <p className="text-gray-500 mt-4">
                6. End of phase
            </p>

            <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>
        </div>
    )
}