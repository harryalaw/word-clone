import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import GuessList from "../GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => {
    setGuesses([...guesses, guess])
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer}/>
      <Input addGuess={addGuess}/>
      Put a game here!
    </>
  );
}

export default Game;
