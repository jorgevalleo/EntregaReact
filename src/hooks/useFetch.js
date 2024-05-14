import { useEffect, useState } from "react"

export const useFetch = (url, method, body) => {
    const [data, setData] = useState(null)
    
    useEffect(() => { 
        fetch(url, {
            method: method,
            body: body,
            headers: {"Content-type": "application/json"},
        })
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    return { data };
}