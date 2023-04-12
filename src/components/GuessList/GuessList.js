import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";
import { checkGuess } from "../../game-helpers.js";

function GuessList({ guesses, answer }) {
  const trimmedGuesses = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {trimmedGuesses.map((num) => {
        const guess = guesses[num];
        return <Guess value={guess} answer={answer} key={num} />;
      })}
    </div>
  );
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => {
        if (!value) {
          return <span className="cell" key={num} />;
        }
        const char = value[num];
        const validation = result[num].status;

        return (
          <span className={`cell ${validation}`} key={num}>
            {char}
          </span>
        );
      })}
    </p>
  );
}

export default GuessList;
