'use client'

import axios from "axios";
import React from "react";

export default function Projects(){
    const [test, setTest] = React.useState("Hello");

    React.useEffect(() => {
        axios.post('http://localhost:3001/update_indicators')
        .then(
            response => {
                setTest(response.data);
            }
        )
    }, []);
    
    return(
        <div className="bg-white">
            <div>
                <h1>Hello</h1>
                <h1>{test.message}</h1>
            </div>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <p>Projects Hub goes here!</p>
            </div>
        </div>
    )
}