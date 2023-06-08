'use client'

import axios from "axios";
import React from "react";

export default function Home(){
    const [message, setMessage] = React.useState(null);
    axios.get(
        'http://localhost:3001/database'
    )
    .then(
        response => {
            setMessage(response.data);
        }
    )
    return(
        <h1>{message}</h1>
    )
}