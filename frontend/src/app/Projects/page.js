'use client'

import { Button, Card } from 'flowbite-react';

export default function Projects() {

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
					<h2 className="text-3xl font-bold text-cadet-gray tracking-tight sm:text-4xl">Projects</h2>
				</div>
			</div>
			<div className='mx-auto max-w-7xl px-6 lg:px-8 mt-6'>
				<div className='mt-12 leading-8 text-gray-600 grid lg:grid-cols-3 justify-center'>
					<div className='max-w-sm mx-2 mb-2'>
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
							<Button href='/Projects/Screener' className='flex-none bg-indigo-500 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
								<p className='text-lg'>Explore Project</p>
							</Button>
						</Card>
					</div>
					<div className='max-w-sm mx-2 mb-2'>
						<Card
							imgAlt="Meaningful alt text for an image that is not purely decorative"
							imgSrc="/WallStreet.jpeg"
						>
							<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Category Indicator
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								Visualizations for relative market sector strengths.
							</p>
							<Button href="/Projects/Category_Indicator" className='flex-none bg-indigo-500 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
								<p className='text-lg'>Explore Project</p>
							</Button>
						</Card>
					</div>
					<div className='max-w-sm mx-2 mb-2'>
						<Card
							imgAlt="Meaningful alt text for an image that is not purely decorative"
							imgSrc="/WallStreet.jpeg"
						>
							<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Trading Bot
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								Automated trading simulator based on historical price data.
							</p>
							<Button href="/Projects/Trading_Bot" className='flex-none bg-indigo-500 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
								<p className='text-lg'>Explore Project</p>
							</Button>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}