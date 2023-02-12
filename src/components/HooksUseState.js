import React, { useState } from "react";

function HooksUseState() {
  const [state, setState] = useState(0);

  return <div>
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>Increase counter</button>
  </div>;
}

export default HooksUseState;
