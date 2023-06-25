'use client'

import { Button, Card } from 'flowbite-react';

export default function Projects(){

	return(
		<div className='bg-white pt-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<h2>Projects</h2>
				<p>Fundamental Analysis</p>
				<p>Technical Analysis</p>
				<p>Machine Learning</p>
				<div className='max-w-lg'>
				<Card
					imgAlt="Meaningful alt text for an image that is not purely decorative"
					imgSrc="/WallStreet.jpeg"
				>
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Noteworthy technology acquisitions 2021
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
					</p>
          <Button>
            <p>
              Read more
            </p>
        </Button>
				</Card>
				</div>
				
			</div>   
		</div>
	)
}
/*
'use client'

import axios from "axios";
import React from "react";

export default function Projects(){
    const [test, setTest] = React.useState("Hello");

    React.useEffect(() => {
        axios.post('http://localhost:3001/update_indicators')
        .then(
            response => {
                setTest(response.data);
            }
        )
    }, []);
    
    return(
        <div className="bg-white">
            <div>
                <h1>Hello</h1>
                <h1>{test.message}</h1>
            </div>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <p>Projects Hub goes here!</p>
            </div>


        </div>
    )
*/