'use client'
import Image from "next/image"
import { Card } from 'flowbite-react';


export default function Blog(){
	// retrieve posts, add algorithm for search bar
	// add image icon
  	const posts = [
    {
		id: 1,
		title: 'June 21, 2023 Market Update',
		href: '#',
		description:
			'This is where the post gives a preview of market conditions and any trading updates! Have fun!',
		date: 'June 21, 2023',
		datetime: '2023-06-21',
		category: { title: 'Daily Market Updates', href: '#' },
		image: '/WallStreet.jpeg',
		author: {
			name: 'Allen Sun',
			role: 'Founder',
			href: '#',
			imageUrl: '/Headshot.png',
		},
    },
	{
		id: 1,
		title: 'June 21, 2023 Market Update',
		href: '#',
		description:
			'This is where the post gives a preview of market conditions and any trading updates! Have fun!',
		date: 'June 21, 2023',
		datetime: '2023-06-21',
		category: { title: 'Daily Market Updates', href: '#' },
		image: '/Hero3.jpg',
		author: {
			name: 'Allen Sun',
			role: 'Founder',
			href: '#',
			imageUrl: '/Headshot.png',
		},
    }
    // More posts...
  	]

	return(
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trading Blog</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						All views are my own.
					</p>
				</div>
				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
				{posts.map((post) => (
					<article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
					<div className="flex items-center gap-x-4 text-xs">
						<time dateTime={post.datetime} className="text-gray-500">
						{post.date}
						</time>
						<a
						href={post.category.href}
						className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
						>
						{post.category.title}
						</a>
					</div>
					<div className="flex-1">
						<img src={post.image} alt="" className="rounded" />

					</div>
					<div className="group relative">
						<h3 className="mt-3 text-2xl font-bold leading-6 text-gray-900 group-hover:text-gray-600">
						<a href={post.href}>
							<span className="absolute inset-0" />
							{post.title}
						</a>
						</h3>
						<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
					</div>
					<div className="relative mt-8 flex items-center gap-x-4">
						<img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
						<div className="text-sm leading-6">
						<p className="font-semibold text-gray-900">
							<a href={post.author.href}>
							<span className="absolute inset-0" />
							{post.author.name}
							</a>
						</p>
						<p className="text-gray-600">{post.author.role}</p>
						</div>
					</div>
					</article>
				))}
				</div>
			</div>
			<div className="mx-auto max-w-2xl px-6 lg:px-8">
				<Card
					imgAlt="Meaningful alt text for an image that is not purely decorative"
					imgSrc="/hero2.jpg"
				>
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Noteworthy technology acquisitions 2021
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
				</p>
				</Card>
			</div>
		</div>
	)
}
