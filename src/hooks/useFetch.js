import { useState, useEffect } from "react"

const useFetch = (url, method, body) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = fetch (url, {
            method: method,
            body: body,
            headers: {
                "Content-Type": "appliation/json",
            },
        });

        getData
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);
    
    return (data, loading, error);
};

export default useFetch