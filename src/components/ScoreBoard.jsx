import { useEffect } from "react";

function ScoreBoard({score, bestScore, setBestScore}){

useEffect(() => {
  if (score > bestScore) {
    setBestScore(score);
  }
}, [score]); 

    return(
        <div className="score-board">
            <h2>Score: {score}</h2>
            <h2>Best Score: {bestScore}</h2>
        </div>
    )

}

export default ScoreBoard;