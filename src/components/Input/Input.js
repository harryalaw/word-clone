import React from "react";

function Input() {
  const [guess, setGuess] = React.useState("");

  const handleInput = (e) => {
    if (e.target.value.length > 5) {
      return;
    }

    setGuess(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({guess});
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleInput}
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default Input;
