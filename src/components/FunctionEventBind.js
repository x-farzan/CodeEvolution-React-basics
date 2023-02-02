import React, { useState } from "react";

function FunctionEventBind() {
  const [state, setState] = useState("Welcome!");

  const changeState = () => {
    setState("Thank you, for clicking!");
  };

  return (
    <div>
      <h1>{state}</h1>
      Functional Event Bind : <button onClick={changeState}>Click Me!</button>
    </div>
  );
}

export default FunctionEventBind;
