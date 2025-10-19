import ScoreBoard from "./ScoreBoard";

function GameOver({ score, bestScore, setBestScore, resetGame}) {

    return (
        <div className="game-over-container">
            <h1>Game Over!</h1>
            <ScoreBoard score={score} bestScore={bestScore} setBestScore={setBestScore} />
            <button onClick={resetGame}>Replay</button>
        </div>
    );
}

export default GameOver;
