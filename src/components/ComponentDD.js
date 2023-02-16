import React, { useContext } from "react";
import { CounterContext } from "../App";

function ComponentDD() {
  const counterContext = useContext(CounterContext);

  return (
    <div>
      CoponentDD : Count - {counterContext.counterState}  
      <button onClick={() => counterContext.counterDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => counterContext.counterDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => counterContext.counterDispatch("reset")}>
        Reset
      </button>
    </div>
  );
}

export default ComponentDD;
