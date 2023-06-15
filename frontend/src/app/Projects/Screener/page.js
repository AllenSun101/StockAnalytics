import axios from "axios";
import React from "react";

async function getData(){
	var patterns = {"No patterns detected": ["No selected stocks"]};

	await axios.get('http://localhost:3001/screener')
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

	var output = [];

	for(const pattern in data){
		data[pattern] = data[pattern].join(", ");
	}

	for (const [key, value] of Object.entries(data)) {
		output.push(<li> {key + ": " + value} </li>);
	}
	
	return (
		<div>
			<p>Hello</p>
			<ul>{output}</ul>
		</div>	
	)
}