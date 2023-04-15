import React from "react";

function Keyboard({ answer, guesses }) {
  // what's the logic, whenever we guess we update the map?
  // then we can style based on the values?
  //
  // or we can just parse the vlaues
  const letterState = {};

  const row1 = "QWERTYUIOP";
  const row2 = "ASDFGHJKL";
  const row3 = "ZXCVBNM";
  return (
    <div className="keyboard">
      <LetterRow characters={row1} />
      <LetterRow characters={row2} />
      <LetterRow characters={row3} />
    </div>
  );
}

function LetterRow({ characters }) {
  return (
    <div className="keyboard-row">
      {characters.split("").map((char) => (
        <Letter key={char} letter={char} />
      ))}
    </div>
  );
}

function Letter({ letter, status }) {
  const style = status ? `keyboard-cell ${status}` : "keyboard-cell";
  return <span className={style}>{letter}</span>;
}

export default Keyboard;
