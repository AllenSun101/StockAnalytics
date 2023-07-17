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
    console.log(props.params.Post);

    const data = await getPost(props.params.Post);
    
    console.log(data.Title);

    return(
        <div>
            <p>Dynamic Routing Working!</p>
            <p>{props.params.Post}</p>
            <h1>{data.Title}</h1>
            <p>{data.Author}</p>
            <p>{data.Date}</p>
            <p>{data.BlogText}</p>
        </div>
    )
}