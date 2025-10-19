import ScoreBoard from "./ScoreBoard";

function GameOver({ score, bestScore, setBestScore }) {
    return (
        <div className="game-over-container">
            <h1>Game Over!</h1>
            <ScoreBoard score={score} bestScore={bestScore} setBestScore={setBestScore} />
        </div>
    );
}

export default GameOver;
