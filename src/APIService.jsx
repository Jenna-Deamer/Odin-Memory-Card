import { useEffect } from "react";

function APIService() {
    const limit = 10;

    useEffect(() => {
        const fetchSprites = async () => {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
            );

            const data = await response.json();
            console.log(data)
        };

        fetchSprites();
    }, [])

    return (
        <>

        </>
    )
}

export default APIService;