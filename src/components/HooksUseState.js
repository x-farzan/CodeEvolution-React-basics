import React, { useState } from "react";

function HooksUseState() {
  const inititalStage = 0;
  const [state, setState] = useState(inititalStage);

  function incrementFive() {
    for (let i = 0; i < 5; i++) {
      setState((prevState) => prevState + 1);
    }
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState(inititalStage)}>Reset counter</button>
      <button onClick={() => setState((prevState) => prevState + 1)}>
        Increase counter
      </button>
      <button onClick={() => setState((prevState) => prevState - 1)}>
        Decrease counter
      </button>
      <button onClick={incrementFive}>Increase counter by 5</button>
    </div>
  );
}

export default HooksUseState;
