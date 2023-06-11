'use client'

import axios from "axios";
import React from "react";

export default function Blog(){
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
        <div>
            <h1>Hello</h1>
            <h1>{test.message}</h1>
        </div>
        
    )
}