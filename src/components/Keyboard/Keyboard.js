import React from "react";
import { checkGuess } from "../../game-helpers";

function Keyboard({ guesses, answer }) {
  const guessedLetters = guesses.reduce((letterState, guessedWord) => {
    const letterStatus = checkGuess(guessedWord, answer);
    letterStatus.forEach(({ letter, status }) => {
      const previousValue = letterState[letter];
      if (previousValue === "correct") return;
      return (letterState[letter] = status);
    });

    return letterState;
  }, {});

  const row1 = "QWERTYUIOP";
  const row2 = "ASDFGHJKL";
  const row3 = "ZXCVBNM";

  return (
    <div className="keyboard">
      <LetterRow characters={row1} guessedLetters={guessedLetters} />
      <LetterRow characters={row2} guessedLetters={guessedLetters} />
      <LetterRow characters={row3} guessedLetters={guessedLetters} />
    </div>
  );
}

function LetterRow({ characters, guessedLetters }) {
  return (
    <div className="keyboard-row">
      {characters.split("").map((char) => (
        <Letter key={char} letter={char} status={guessedLetters[char]} />
      ))}
    </div>
  );
}

function Letter({ letter, status }) {
  const style = status ? `keyboard-cell ${status}` : "keyboard-cell";
  return <span className={style}>{letter}</span>;
}

export default Keyboard;
