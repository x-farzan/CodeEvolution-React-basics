import React, { useReducer } from "react";

// Reducer is also for state management
//      1.  useReducer(reducer, initialState)
//      2.  const newState = reducer(state, action)
//      3.  const [ state, dispatch ] = useReducer(reducer, initialState)

// Step 2
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducer() {
  // Step 1 and 3
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count - {state}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default UseReducer;
