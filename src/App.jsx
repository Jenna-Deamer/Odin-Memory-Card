import { useEffect, useState } from "react";
import Cards from "./components/Card";

function App() {
    const [data, setData] = useState(null);
 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const fetchPokemon = async () => {
            const pokeSprites = []
            try {
                // fetch sprite foreach pokemon
                for (let i = 0; i <= 10; i++) {
                    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1000) + 1}`);
                    const result = await res.json();

                    pokeSprites.push({
                        name: result.name,
                        sprite: result.sprites.front_default
                    });
                }
                setData(pokeSprites)
                setLoading(false)

            } catch (err) {
                console.error('Error ' + err)
            }
        }

        fetchPokemon();
    }, [])

    if (loading) return <div>Loading...</div>


    console.log(data)

    return (
        <>

            <h1>Memory Card Game</h1>
            <main>
                <Cards data={data} />
            </main>
        </>
    )
}

export default App
