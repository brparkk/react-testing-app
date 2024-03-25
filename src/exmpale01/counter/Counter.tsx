import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleCountUp = () => {
    setCount((prev) => prev + 1);
  };

  const handleCountDown = () => {
    if (count === 0) return;
    setCount((prev) => prev - 1);
  };

  const handleToggleOnOff = () => {
    setDisabled((prev) => !prev);
  };

  return (
    <div className="App-container">
      <span data-testid="counter">{count}</span>
      <div className="App-button-wrapper">
        <button
          aria-label="minus button"
          onClick={handleCountDown}
          disabled={disabled}
        >
          -
        </button>
        <button
          aria-label="plus button"
          onClick={handleCountUp}
          disabled={disabled}
        >
          +
        </button>
      </div>
      <button
        aria-label="onoff button"
        className="App-button"
        onClick={handleToggleOnOff}
        style={{ backgroundColor: "white" }}
      >
        on/off
      </button>
    </div>
  );
}

Counter.propTypes = {};

export default Counter;
