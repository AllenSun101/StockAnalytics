import axios from "axios";

async function getPost(postID){
	var postInfo = [{"Title": "No Information", "Author": "No Information", "Date" : "No Information", "BlogText": "No Information"}];

	await axios.post('http://localhost:3001/Retrieve_Post', {
            id : postID
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

export default async function Post(props){
	
    const data = await getPost(props.params.Post);
    
    // console.log(data.Title);

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

	data.Date = FormatDate(data.Date);

    return(
        <div className="bg-white py-24 sm:py-32">
          <div className="max-w-screen-xl mx-auto mt-10">
            <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: "24em" }}>
              	<div className="absolute left-0 bottom-0 w-full h-full z-10" style={{ backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))" }}></div>
              	<img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
              	<div className="p-4 absolute bottom-0 left-0 z-20">
              	<a href="#" className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Trading Updates</a>
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

			<div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto leading-relaxed whitespace-pre-line">
				<p className="pb-6">{data.Text}</p>
			</div>

    		</div>
        </div>
    )
}
