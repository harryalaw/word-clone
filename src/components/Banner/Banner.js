import React from "react";

function Banner({ guesses, answer, gameStatus, resetGame}) {
  if (gameStatus === "inprogress") {
    return null;
  }

  return (
    <div className={gameStatus === "win" ? "happy banner" : "sad banner"}>
      {gameStatus === "win" ? (
        <CongratsText guessCount={guesses.length} />
      ) : (
        <LoserText answer={answer} />
      )}
      <button className="reset-button" onClick={resetGame}>Play again</button>
    </div>
  );
}

function CongratsText({ guessCount }) {
  return (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>
        {" "}
        {guessCount} guess{guessCount > 1 ? "es" : ""}
      </strong>
      .
    </p>
  );
}

function LoserText({ answer }) {
  return (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );
}

export default Banner;
