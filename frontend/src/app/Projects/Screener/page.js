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

	return (
		<div>
			<p>Screener</p>
			<ul>
				{setups.map((setup, index) => (
    				<li key={index}>{setup + ":" + data[setup]}</li>
  				))}
			</ul>
		</div>	
	)
}