import Image from 'next/image'

export default function Hero() {

	return (		
		<div className="relative isolate px-6 pt-14 lg:px-8">
			<Image src = "/Hero.jpg" alt="Hero" fill={true} className='opacity-20'/>
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<div className="text-center">
					<h1 className="relative text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Welcome to my site!
					</h1>
					<p className="relative mt-6 text-lg leading-8 text-gray-600">
						I'm Allen, an eighteen-year-old stock market enthusiast. I love trading,
						programming with finance, and following up on innovation!
					</p>
				</div>
			</div>
		</div>
	)
}
