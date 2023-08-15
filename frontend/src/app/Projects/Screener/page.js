import axios from "axios";
import React from "react";

async function getData(){
	var patterns = [];

	await axios.post('http://localhost:3001/screener_find_date', {
		screener: "broadscreener",
		date: "2023-08-08"
	})
		.then(
			response => {
				patterns = response.data;
			}
		)
		.catch(function (error) {
			console.log(error);
		});
		
	return patterns;
}


export default async function Screener() {
	const data = await getData();
	console.log(data);

	var setups = ['Momentum', 'Trend'];

	function SeparateTickers(tickers){
		tickers = tickers.split(",");
		tickers = tickers.join(", ");
		return tickers;
	}

	return (
        <div className="overflow-hidden bg-white pt-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="text-4xl text-center font-bold text-purple-500 mb-6">
					<h2>Screener</h2>
				</div>
				<form>
					<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
						</svg>
						</div>
						<input
						type="search"
						id="default-search"
						className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#69328F] focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Find Date (MM-DD-YYYY)"
						required
						/>
						<button
						type="submit"
						className="text-white absolute right-2.5 bottom-2.5 bg-[#69328F] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
						Search
						</button>
					</div>
				</form>
				<ul className="mt-12">
					{setups.map((setup, index) => (
						<div className="mb-3">
							<div className="text-2xl mb-1">
								<h2>{setup}</h2>
							</div>
							<li key={index}>{SeparateTickers(data[setup])}</li>
						</div>
					))}
				</ul>
			</div>
		</div>	
	)
}