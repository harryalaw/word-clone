import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import GuessList from "../GuessList";
import Banner from "../Banner";
import Keyboard from "../Keyboard";

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.
function generateAnswer() {
  const answer = sample(WORDS);
  console.info({ answer });
  return answer;
}

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    return generateAnswer();
  });
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("inprogress");

  function resetGame() {
    setGuesses([]);
    setGameStatus("inprogress");
    setAnswer(generateAnswer());
  }

  React.useEffect(() => {
    const isWin = guesses.length > 0 && guesses[guesses.length - 1] === answer;
    const isLoss = guesses.length === 6 && guesses[5] !== answer;
    if (isWin) {
      setGameStatus("win");
    } else if (isLoss) {
      setGameStatus("loss");
    }
  }, [guesses, answer]);

  const addGuess = (guess) => {
    setGuesses([...guesses, guess]);
  };

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <Input addGuess={addGuess} disabled={gameStatus !== "inprogress"} />
      <Keyboard guesses={guesses} answer={answer} />
      <Banner
        guesses={guesses}
        answer={answer}
        gameStatus={gameStatus}
        resetGame={resetGame}
      />
    </>
  );
}

export default Game;
