"use client"
import Navbar from "@/app/components/navbar"

export default function Analyze() {
    return (
        <div className="mt-6 mx-6">
            <h1 className="text-xl font-bold">
                Analyze
            </h1>
            <p className="text-gray-500 mt-4">
                In the &aposAnalyze&apos phase, you dive deep into the data, searching for patterns, root causes, and insights that will illuminate the path to process improvement. It&aposs where you decode the intricacies of your operations.
            </p>

            <p className="text-gray-500 mt-4">
                1. Graphic analyses : The aim of this stage is to carry out studies on the data identified in the previous phase using tools such as Pareto, Histogram, Scatter plot, Dot plot, etc.
            </p>

            <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

            <p className="text-gray-500 mt-4">
                2. Verify statistically : This step aim to correct the graphic analysis. 
            </p>

            <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

            <p className="text-gray-500 mt-4">
                3. Finding the root causes : For this step, 5 WHYS tool and Ishikawa can be used for that.
            </p>

            <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

            <p className="text-gray-500 mt-4">
                4. Validate causes
            </p>

            <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>

            <p className="text-gray-500 mt-4">
                5. End-of-phase review
            </p>

            <button className="transition-all ease-in-out mt-4 border bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-700">Next step</button>
        </div>
    )
}