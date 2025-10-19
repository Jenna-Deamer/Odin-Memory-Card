import { useEffect, useState } from "react";
import Cards from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";

function App() {
    const [data, setData] = useState(null);
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(score);
    const [selectedCards, setSelectedCards] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const fetchPokemon = async () => {
            const pokeSprites = []
            try {
                // fetch sprite foreach pokemon
                for (let i = 0; i <= 11; i++) {
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

    return (
        <>
            <header className="header">
                <h1>Memory Card Game</h1>
                <h2>Get points by clicking the images but, don't click the same one twice!</h2>
            </header>

            <ScoreBoard score={score} bestScore={bestScore} setBestScore={setBestScore}/>

            <main>
                <div className="card-container">
                    <Cards data={data} selectedCards={selectedCards} setSelectedCards={setSelectedCards} setScore={setScore} />
                </div>

            </main>
        </>
    )
}

export default App
