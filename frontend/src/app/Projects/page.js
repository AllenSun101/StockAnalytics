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