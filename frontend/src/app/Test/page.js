'use client'

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Test(){
    const { isLoading, error, data } = useQuery({
        queryKey: ['Testing'],
        queryFn: () =>
            axios.post("http://localhost:3001/update_indicators").then(
            (res) => res.data,
          ),
    })

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return(
        <div className="bg-white">
            <h1>Hello</h1>
            <h1>{data.message}</h1>
        </div>
    )
}
