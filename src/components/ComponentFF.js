import React, { useContext } from "react";
import { CounterContext } from "../App";

function ComponentFF() {
  const counterContext = useContext(CounterContext);

  return (
    <div>
      CoponentFF : Count - {counterContext.counterState}
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

export default ComponentFF;
