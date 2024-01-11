'use client'

import dynamic from "next/dynamic";
import axios from "axios";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Category_Indicator() {
    const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, })

    const [startDate, setStartDate] = useState('2023-10-01');
    const [endDate, setEndDate] = useState('2023-12-25');
    const [version, setVersion] = useState('Uptrend');
    const [plot, setPlot] = useState("");


    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['Retrieve_Dates'],
        queryFn: () =>
            axios.post("http://localhost:3001/retrieve_dates", {
                start: startDate,
                end: endDate,
                version: version,
            }).then(
                response => {
                    setPlot(response.data);
                }
            ),
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        // usequery and update
        refetch();
    };

    const handleStartChange = (e) => {
        e.preventDefault();
        setStartDate(e.target.value)
    };

    const handleEndChange = (e) => {
        e.preventDefault();
        setEndDate(e.target.value)
    };

    const handleVersionChange = (e) => {
        e.preventDefault();
        setVersion(e.target.value)
    };


    return (
        <div className="isolate bg-white py-24 sm:py-32">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8640B4] via-[#F2C7F8] to-[#9BE9D8] opacity-30 w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(80% 50%, 120% 41.6%, 87.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.9% 120%, 32.9% 100%, 37.6% 76.8%, 36.1% 77.7%, 46.1% 97.7%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold text-cadet-gray tracking-tight sm:text-4xl">Category Indicator</h2>
                </div>
            </div>

            <div className="mt-12 mx-auto max-w-7xl px-6 lg:px-8">
                <div>
                    <form className="sm:flex sm:flex-wrap justify-center" onSubmit={handleSubmit}>
                        <div className="mb-4 sm:mr-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                                Start Date:
                            </label>
                            <input
                                type="date"
                                id="startDate"
                                className="appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                value={startDate}
                                onChange={handleStartChange}
                            />
                        </div>
                        <div className="mb-4 sm:mr-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                                End Date:
                            </label>
                            <input
                                type="date"
                                id="endDate"
                                className="appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                value={endDate}
                                onChange={handleEndChange}
                            />
                        </div>
                        <div className="mb-4 sm:mr-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="version">
                                Version:
                            </label>
                            <select
                                id="version"
                                className="appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                value={version}
                                onChange={handleVersionChange}
                            >
                                <option value="Uptrend">Uptrend</option>
                                <option value="Growth">Price Growth</option>
                                <option value="Aggregate">Price Growth Magnitude</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="mt-6 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded sm:inline-flex sm:items-center"
                        >
                            Submit
                        </button>

                    </form>


                </div>


                <div className="flex items-center justify-center overflow-auto">
                <Plot
  className="mt-12 h-[70vh]"
  data={plot.data}
  layout={{
    ...plot.layout,
    showlegend: false,
    margin: { l: 0, r: 0, t: 0, b: 0 },
  }}
  config={{ displayModeBar: false }}
/>
       </div>

                <h1 className='mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center'>How It Works</h1>
                <p className="mt-6 text-lg">The Category Indicator is a sector comparison tool that identifies strong and weak areas of the markets by
                    aggregating stock performances within each sector. Over 1400 stocks are analyzed.</p>
                <p className="mt-2 text-lg">The Uptrend version uses the presence of stock uptrends to determine sector strength.</p>
                <p className="mt-2 text-lg">The Price Growth version uses the presence of price increases to determine sector strength.</p>
                <p className="mt-2 text-lg">The Price Growth Magnitude version uses volatility in price changes to determine sector strength.</p>

            </div>
        </div>

    )
}