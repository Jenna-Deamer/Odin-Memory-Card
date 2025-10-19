import { useEffect } from "react";

function ScoreBoard({score, bestScore, setBestScore}){

useEffect(() => {
  if (score > bestScore) {
    setBestScore(score);
  }
}, [score]); 

    return(
        <div className="score-board">
            <h4>Score: {score}</h4>
            <h4>Best Score: {bestScore}</h4>
        </div>
    )

}

export default ScoreBoard;