import axios from "axios";
import Link from "next/link";

async function getPost(postID) {
	var postInfo = [{ "Title": "No Information", "Author": "No Information", "Date": "No Information", "BlogText": "No Information" }];

	await axios.post('http://localhost:3001/Retrieve_Post', {
		id: postID
	})
		.then(
			response => {
				postInfo = response.data;
			}
		)
		.catch(function (error) {
			console.log(error);
		});

	return postInfo[0];
}

export default async function Post(props) {

	const data = await getPost(props.params.Post);

	// console.log(data.Title);

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

	data.Date = FormatDate(data.Date);

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="max-w-screen-xl mx-auto mt-10">
				<Link href="/Blog">
					<div className="flex max-w-screen-md mx-auto mb-2">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
						<p>Back</p>
					</div>
				</Link>
				<div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: "24em" }}>
					<div className="absolute left-0 bottom-0 w-full h-full z-10" style={{ backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))" }}></div>
					<img src="/BlogBackground.jpg" className="absolute left-0 top-0 w-full h-full z-0 object-cover rounded-lg" />
					<div className="p-4 absolute bottom-0 left-0 z-20">
						<Link href="#" className="px-4 py-1 text-white rounded-lg px-4 py-2 bg-indigo-500 font-semibold shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 inline-flex items-center justify-center mb-2">Trading Updates</Link>
						<h2 className="text-4xl font-semibold text-gray-100 leading-tight">
							{data.Title}
						</h2>
						<div className="flex mt-3">
							<img src="/Headshot.png" className="h-10 w-10 rounded-full mr-2 object-cover" />
							<div>
								<p className="font-semibold text-gray-200 text-sm">{data.Author}</p>
								<p className="font-semibold text-gray-400 text-xs">{data.Date}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto whitespace-pre-line">
					<p className="pb-6">{data.Text}</p>
				</div>

			</div>
		</div>
	)
}
