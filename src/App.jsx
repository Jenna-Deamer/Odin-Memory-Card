import { useEffect, useState } from "react";
import { fetchRandomPokemon } from "./services/pokemon";
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

    const fetchPokemon = async () => {
        setLoading(true);
        try {
            const data = await fetchRandomPokemon();
            setPokemonData(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };


    const resetGame = () => {
        setScore(0);
        setBestScore(0)
        setSelectedCards([]);
        setPokemonData(null)
        fetchPokemon();
        setGameOver(false);

    }

    useEffect(() => {
        if (!pokemonData) return // don't flag game over if data isn't done loading
        if (selectedCards.length >= pokemonData.length) {
            setGameOver(true);
        }
    }, [selectedCards, pokemonData])

    useEffect(() => {
        fetchPokemon();
    }, [])

    if (gameOver) return <GameOver score={score} bestScore={bestScore} setBestScore={setBestScore} resetGame={resetGame} />
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
