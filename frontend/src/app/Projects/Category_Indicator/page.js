'use client'

import dynamic from "next/dynamic";
import axios from "axios";
import React from "react";

export default function Category_Indicator(){
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
            <Plot data={test.data} layout={test.layout} />
        </div>
        
    )
}