'use client'

import axios from "axios";
import React from "react";

export default function Home(){
    const [test, setTest] = React.useState("Hello");

    React.useEffect(() => {
        axios.get('http://localhost:3001/database')
        .then(
            response => {
                setTest(response.data);
            }
        )
    }, []);
    
    return(
        <h1>{test.message}</h1>
    )
}