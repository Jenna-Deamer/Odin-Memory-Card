import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState(null);
    const limit = 10;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
            .then(response => response.json())
            .then(data => setData(data))
            .finally(() => setLoading(false))
    }, [setData])

    if (loading) return <div>Loading...</div>

    return (
        <>
            <h1>Memory Card Game</h1>
        </>
    )
}

export default App
