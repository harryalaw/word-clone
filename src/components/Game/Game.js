import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import GuessList from "../GuessList";
import Banner from "../Banner";
import Keyboard from "../Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("inprogress");

  React.useEffect(() => {
    const isWin = guesses[guesses.length - 1] === answer;
    const isLoss = guesses.length === 6 && guesses[5] !== answer;
    if (isWin) {
      setGameStatus("win");
    } else if (isLoss) {
      setGameStatus("loss");
    }
  }, [guesses]);

  const addGuess = (guess) => {
    setGuesses([...guesses, guess]);
  };

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <Input addGuess={addGuess} disabled={gameStatus !== "inprogress"} />
      <Keyboard guesses={guesses} answer={answer} />
      <Banner guesses={guesses} answer={answer} gameStatus={gameStatus} />
    </>
  );
}

export default Game;
