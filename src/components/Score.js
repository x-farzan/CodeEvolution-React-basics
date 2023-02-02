import React, { useState } from "react";

function Score() {
  let [state, setState] = useState(0);

  const increment = () => {
    setState((prevState) => (state = prevState + 1));
  };

  const changeState = () => {
    increment();
    increment();
    increment();
    increment();
    increment();
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => changeState()}>Increment</button>
    </div>
  );
}

export default Score;
