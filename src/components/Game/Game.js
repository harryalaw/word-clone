import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import GuessList from "../GuessList";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isFinished, setIsFinished] = React.useState(false);

  const addGuess = (guess) => {
    setGuesses([...guesses, guess]);
  };

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <Input addGuess={addGuess} disabled={isFinished} />
      Put a game here!
      <Banner guesses={guesses} answer={answer} setIsFinished={setIsFinished} />
    </>
  );
}

export default Game;
