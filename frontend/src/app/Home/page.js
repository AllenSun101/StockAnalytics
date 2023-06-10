'use client'

import axios from "axios";
import React from "react";

import dynamic from "next/dynamic";

export default function Home(){
    const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, })

    const [test, setTest] = React.useState("Hello");

    React.useEffect(() => {
        axios.get('http://localhost:3001/api')
        .then(
            response => {
                setTest(response.data);
            }
        )
    }, []);
    
    return(
        <div>
            <h1>Hello</h1>
            <Plot data={test.data} layout={test.layout} />
            <h1>Testing</h1>
        </div>
        
    )
}