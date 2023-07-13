'use client'

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Test(){
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

    const posts = [];

    function MapData(data){
        data.map((post) => {
            posts.push({
                id: post.idBlogPosts,
                title: post.Title,
                author: post.Author,
                date: post.Date,
                blogText: post.BlogText
            })
        })
    }

    MapData(data);

    return(
        <div className="bg-white">
            <h1>Hello</h1>
            {data.map((post) => {
                var formattedDate = FormatDate(post.Date);
                return(
                    <div className='Posts' key={post.idBlogPosts}>
                        <h3 className='PostTitles'>{post.Title}</h3>
                        <h5 className='NameDate'>By: {post.Author}, {formattedDate}</h5>
                        <p>{post.BlogText.substring(0, 250) + "..."}</p>
                    </div>
                )
            })}
            <p>{posts[3].date}</p>
        </div>
    )
}

/*

function DailyTradingUpdates(){
    
    const [visiblePosts, setVisiblePosts] = React.useState(4);
    const [searchData, setSearchData] = React.useState("");
    const [officialSearchData, setOfficialSearchData] = React.useState("");

    React.useEffect(() =>{
        fetch("/blogs",{
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                numPosts: visiblePosts,
                search: officialSearchData
            })
        })
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [visiblePosts, officialSearchData]);



    function LoadMorePosts(){
        setVisiblePosts(visiblePosts => visiblePosts + 3);
    }

    function updateSearch(event){
        setSearchData(event.target.value);
    }


    function SearchKeyword(event){
        event.preventDefault();
        setOfficialSearchData(searchData);
    }


    return (
                <Row>
                    <Form>
                        <Form.Group className="mb-3 search" controlId="postSearchBar">
                        <Form.Label>Search for a Post</Form.Label>
                        <Form.Control type="text" 
                            placeholder="Enter title or keywords"
                            className="SearchBar"
                            value={searchData}
                            onChange={updateSearch}
                        />
                        <Button className="button" size="lg" type="submit" onClick={SearchKeyword}>Search</Button>
                        </Form.Group>
                    </Form>
                </Row>
                <Row>
                    <Col sm="9" className='PostGroup'>
                        <h2 className='PostsTag'>Recent Posts</h2>
                        <RenderPosts />
                        <Button className="button" size="lg" type="submit" onClick={LoadMorePosts}>Load More Posts</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
*/