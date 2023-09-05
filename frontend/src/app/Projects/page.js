'use client'

import { Button, Card } from 'flowbite-react';

export default function Projects(){

	return(
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
				</div>
			</div>
			<div className='mx-auto max-w-7xl px-6 lg:px-8 mt-6'>
				<div className="mx-auto max-w-2xl lg:mx-0 mb-2">
					<h3 className="text-lg font-bold text-gray-900 sm:text-2xl">Technical Analysis</h3>
					<div className='max-w-sm'>
						<Card
							imgAlt="Meaningful alt text for an image that is not purely decorative"
							imgSrc="/WallStreet.jpeg"
						>
							<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Screener
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								Technical Analysis Screener for patterns and trading set-ups.
							</p>
							<Button>
								<p>Explore Project</p>
							</Button>
						</Card>
					</div>
				</div>
				<div className="mx-auto max-w-2xl lg:mx-0 mb-2">
					<h3 className="text-lg font-bold text-gray-900 sm:text-2xl">Machine Learning</h3>
				</div>
			</div>  
		</div>
	)
}