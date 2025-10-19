import { useEffect, useState } from "react";

function APIService() {
    const limit = 10;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <div>Loading...</div>

    return (
        <>
         
        </>
    )
}

export default APIService;