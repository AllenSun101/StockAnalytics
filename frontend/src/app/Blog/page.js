'use client'
import Link from "next/link"
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Blog(){

	// Retrieve Data

	const { isLoading, error, data } = useQuery({
        queryKey: ['Testing'],
        queryFn: () =>
            axios.post("http://localhost:3001/blog_posts").then(
            (res) => res.data,
          ),
    })

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;
    
    function FormatDate(date){
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
    },
	{
		id: 1,
		title: 'June 21, 2023 Market Update',
		href: '/Blog/2',
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
		href: '/About',
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

				
				<div className="container px-4 py-24 mx-auto">
      				<div className="flex flex-wrap -m-4">
        				{data.map((post, index) => (
          					<div className="p-4 md:w-1/3" key={index}>
								<div className="flex items-center gap-x-4 text-xs">
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
            					<div className={`h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-[#9BE9D8] overflow-hidden`}>
									<img
										className="lg:h-60 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
										src={post.ImageURL}
										alt="blog"
									/>
									<div className="p-6">
										<h1 className="mt-3 text-2xl font-bold leading-6 text-[#69328F] group-hover:text-gray-600 mb-3">
											<Link href={"/Blog/" + post.idPosts}>
												<span className="absolute inset-0" />
												{post.Title}
											</Link>
										</h1>
										<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 mb-3">
											{post.Description}
										</p>
										<div className="relative mt-8 flex items-center gap-x-4">
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
						<li>Dummy Category 1</li>
						<li>Dummy Category 2</li>
						<li>Dummy Category 3</li>
					</ul>
				</div>

			</div>
		</div>
	)
}
