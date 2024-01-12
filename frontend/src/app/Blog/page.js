'use client'
import Link from "next/link"
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Blog() {

	const [numPosts, setNumPosts] = useState(6);

	// Retrieve Data

	const { isLoading, error, data, refetch } = useQuery({
		queryKey: ['Testing'],
		queryFn: () =>
			axios.post("http://localhost:3001/blog_posts", { numPosts }).then(
				(res) => res.data,
			),
	})

	if (isLoading) return 'Loading...';

	if (error) return 'An error has occurred: ' + error.message;

	function FormatDate(date) {
		var monthConversion = {
			"01": "January",
			"02": "February",
			"03": "March",
			"04": "April",
			"05": "May",
			"06": "June",
			"07": "July",
			"08": "August",
			"09": "September",
			"10": "October",
			"11": "November",
			"12": "December"
		}
		var year = date.substring(0, 4);
		var day = date.substring(8, 10);
		var month = monthConversion[date.substring(5, 7)];
		return month + " " + day + ", " + year;
	}

	function LoadMorePosts() {
		setNumPosts(numPosts + 3);
		refetch();
	}

	const posts = [
		{
			id: 1,
			title: 'June 21, 2023 Market Update',
			href: '/Blog/1',
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
		}
	]


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
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold text-cadet-gray tracking-tight sm:text-4xl">Trading Blog</h2>
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
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
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
								className="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-indigo-500 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>
								Search
							</button>
						</div>
					</form>
				</div>


				<div className="flex">
					<div className="w-5/6">
						<div className="pt-12 mb-12">
							<div className="flex flex-wrap -m-4">
								{data.map((post, index) => (
									<div className="p-4 lg:w-1/3 mb-4" key={index}>
										<div className="flex items-center gap-x-4 text-xs mb-1">
											<time dateTime={post.Date/*post.datetime*/} className="text-gray-500">
												{FormatDate(post.Date)}
											</time>
											<Link
												href={post.Category/*post.category.href*/}
												className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
											>
												{post.Category}
											</Link>
										</div>
										<div className="h-full rounded-xl overflow-hidden shadow-lg">
											<img
												className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
												src={post.ImageURL}
												alt="blog"
											/>
											<div className="pt-6 px-6">
												<h1 className="mt-3 text-2xl font-bold leading-6 text-cadet-gray group-hover:text-gray-600 mb-3">
													<Link href={`/Blog/${post.idPosts}`}>
														{post.Title}
													</Link>
												</h1>
												<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 mb-3">
													{post.Description}
												</p>
												<div className="relative flex items-center gap-x-4">
													<img src="/Headshot.png" alt="Headshot" className="h-10 w-10 rounded-full bg-gray-50" />
													<div className="text-sm leading-6">
														<p className="font-semibold text-gray-900">
															<Link href="/Allen">
																<span className="absolute inset-0" />
																{post.Author}
															</Link>
														</p>
														<p className="text-gray-600">Founder</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div>
							<button type="submit"
								className="text-white font-medium rounded-lg px-4 py-2 bg-indigo-500 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
								onClick={LoadMorePosts}
							>
								Load More Posts
							</button>
						</div>
					</div>
					
					<div className="w-1/6 px-4">
						<div className="py-12">
							<div className="mt-4 mb-4">
								<h3 className="text-lg font-bold mb-2">Archives</h3>
								<ul className="list-disc pl-6">
									<li>January 2024</li>
									<li>February 2024</li>
									<li>March 2024</li>
								</ul>
							</div>

							<div className="">
								<h3 className="text-lg font-bold mb-2">Categories</h3>
								<ul className="list-disc pl-6">
									<li>Daily Updates</li>
									<li>Trading Journal</li>
									<li>Personal</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
