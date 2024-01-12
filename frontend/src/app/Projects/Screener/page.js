import axios from "axios";
import React from "react";

async function getData() {
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

	function SeparateTickers(tickers) {
		if (tickers != undefined) {
			tickers = tickers.split(",");
			tickers = tickers.join(", ");
		}
		return tickers;
	}

	return (
		<div className="isolate overflow-hidden bg-white py-24 sm:py-32">
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
					<h2 className="text-3xl font-bold text-cadet-gray tracking-tight sm:text-4xl mb-12">Screener</h2>
				</div>
				<form className="mx-auto max-w-md">
					<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
						Search
					</label>
					<div className="flex items-center">
						<div className="relative flex-1">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 20"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
									/>
								</svg>
							</div>
							<input
								type="search"
								id="default-search"
								className="w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#69328F] focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Find Date (MM-DD-YYYY)"
								required
							/>
						</div>
						<button
							type="submit"
							className="ml-4 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
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

				<h1 className='mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center'>How It Works</h1>
                <p className="mt-6 text-lg">The screener algorithmically identifies strong patterns within a list of over 1400 stocks. 
				Each broad pattern has sub-patterns that provide specific setup opportunities.
				Patterns are identified using daily price data.</p>
                <p className="mt-2 text-lg">Momentum</p>
                <p className="mt-2 text-lg">Trend</p>
			</div>
		</div>
	)
}