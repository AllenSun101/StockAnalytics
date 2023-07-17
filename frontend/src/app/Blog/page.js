'use client'
import Image from "next/image"
import Link from "next/link"


export default function Blog(){
	// retrieve posts, add algorithm for search bar
	// add image icon
  	const posts = [
    {
		id: 54,
		title: 'June 21, 2023 Market Update',
		href: '/Blog/54',
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
		href: '/Blog/LOLL',
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
    },
	{
		id: 3,
		title: 'June 30, 2023 Market Update and More',
		href: '/Blog/3',
		description:
			'This is where the post gives a preview of market conditions and any trading updates! Have fun!',
		date: 'June 21, 2023',
		datetime: '2023-06-21',
		category: { title: 'Daily Market Updates', href: '#' },
		image: '/Hero2.jpg',
		author: {
			name: 'Allen Sun',
			role: 'Founder',
			href: '#',
			imageUrl: '/Headshot.png',
		},
    }, 
	{
		id: 3,
		title: 'June 30, 2023 Market Update',
		href: '#',
		description:
			'This is where the post gives a preview of market conditions and any trading updates! Have fun!',
		date: 'June 21, 2023',
		datetime: '2023-06-21',
		category: { title: 'Daily Market Updates', href: '#' },
		image: '/Hero2.jpg',
		author: {
			name: 'Allen Sun',
			role: 'Founder',
			href: '#',
			imageUrl: '/Headshot.png',
		},
    }
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
				<div className="mt-6">
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
						placeholder="Search Posts"
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
				</div>
				
				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
				{posts.map((post) => (
					<article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
					<div className="flex items-center gap-x-4 text-xs">
						<time dateTime={post.datetime} className="text-gray-500">
						{post.date}
						</time>
						<Link
						href={post.category.href}
						className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
						>
						{post.category.title}
						</Link>
					</div>
					<div className="flex-1">
						<img src={post.image} alt="" className="rounded-t-lg" style={{ height: "100%" }}/>
					</div>



					<div className="bg-[#9BE9D8] rounded-b-lg">

					<div className="group relative px-4">
						<h3 className="mt-3 text-2xl font-bold leading-6 text-[#69328F] group-hover:text-gray-600">
						<Link href={post.href}>
							<span className="absolute inset-0" />
							{post.title}
						</Link>
						</h3>
						<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
					</div>
					<div className="relative mt-8 flex items-center gap-x-4 px-4 pb-2">
						<img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
						<div className="text-sm leading-6">
						<p className="font-semibold text-gray-900">
							<Link href={post.author.href}>
							<span className="absolute inset-0" />
							{post.author.name}
							</Link>
						</p>
						<p className="text-gray-600">{post.author.role}</p>
						</div>
					</div>

					</div>
					
					</article>
				))}
				</div>

				<div>
					<button
							type="submit"
							className="text-white mt-3 bottom-2.5 bg-[#69328F] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
							Load More Posts
					</button>
				</div>

				<div className="">
        			<h3 className="text-lg font-bold mb-2">Archives</h3>
						<ul className="list-disc pl-6">
						<li>Dummy Archive 1</li>
						<li>Dummy Archive 2</li>
						<li>Dummy Archive 3</li>
					</ul>
				</div>

				<div className="">
        			<h3 className="text-lg font-bold mb-2">Categories</h3>
						<ul className="list-disc pl-6">
						<li>Dummy Archive 1</li>
						<li>Dummy Archive 2</li>
						<li>Dummy Archive 3</li>
					</ul>
				</div>

			</div>
		</div>
	)
}
