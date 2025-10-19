import { useEffect, useState } from "react";
import Cards from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";
import GameOver from "./components/GameOver";

function App() {
    const [pokemonData, setPokemonData] = useState(null);
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0);
    const [selectedCards, setSelectedCards] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        if(!pokemonData) return // don't flag game over if data isn't done loading
        if(selectedCards.length >= pokemonData.length){
            setGameOver(true);
        }
    },[selectedCards,pokemonData])

    useEffect(() => {
        setLoading(true)
        const fetchPokemon = async () => {
            const pokeSprites = []
            try {
                for (let i = 0; i <= 11; i++) {
                    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1000) + 1}`);
                    const result = await res.json();

                    let speciesName = result.species.name;
                    let name = speciesName.charAt(0).toUpperCase() + speciesName.slice(1);

                    pokeSprites.push({
                        name,
                        sprite: result.sprites.front_default
                    });
                }
                setPokemonData(pokeSprites)
                setLoading(false)

            } catch (err) {
                console.error('Error ' + err)
            }
        }

        fetchPokemon();
    }, [])

    if (gameOver) return <GameOver score={score} bestScore={bestScore} setBestScore={setBestScore} />
    if (loading) return <main className="loading-container"><h1>Loading...</h1></main>

    return (
        <>
            <header className="header">
                <h1>Memory Card Game</h1>
            </header>

            <ScoreBoard score={score} bestScore={bestScore} setBestScore={setBestScore} />

            <main>
                <div className="card-container">
                    <Cards pokemonData={pokemonData} selectedCards={selectedCards} setSelectedCards={setSelectedCards} setScore={setScore} />
                </div>

            </main>
        </>
    )
}

export default App
