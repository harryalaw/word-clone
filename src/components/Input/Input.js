import React from "react";

function Input({addGuess}) {
  const [guess, setGuess] = React.useState("");

  const handleInput = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    addGuess(guess.toUpperCase());
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
 
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleInput}
      />
    </form>
  );
}

export default Input;
