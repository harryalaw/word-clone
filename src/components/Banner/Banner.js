import React from "react";

function Banner({ guesses, answer, setIsFinished }) {
  const isWin = guesses[guesses.length - 1] === answer;
  const isLoss = guesses.length === 6 && guesses[5] !== answer;

  const isFinished = isWin || isLoss;

  if (!isFinished) {
    return null;
  }

  setIsFinished(true);

  return (
    <div className={isWin ? "happy banner" : "sad banner"}>
      {isWin ? (
        <CongratsText guessCount={guesses.length} />
      ) : (
        <LoserText answer={answer} />
      )}
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
