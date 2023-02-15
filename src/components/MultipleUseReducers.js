import React, { useReducer } from "react";

// Reducer is also for state management
//      1.  useReducer(reducer, initialState)
//      2.  const newState = reducer(state, action)
//      3.  const [ state, dispatch ] = useReducer(reducer, initialState)

// Step 2
const initialState = {
  initialCount: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.increment;
    case "decrement":
      return state - action.increment;
    case "reset":
      return initialState.initialCount;
    default:
      return state;
  }
};

function MultipleUseReducer() {
  // Step 1 and 3
  const [state, dispatch] = useReducer(reducer, initialState.initialCount);
  const [stateTwo, dispatchTwo] = useReducer(
    reducer,
    initialState.initialCount
  );
  return (
    <div>
      <div>
        <h1>Count - {state}</h1>
        <button onClick={() => dispatch({ type: "increment", increment: 5 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", increment: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>

      <div>
        <h1>Count - {stateTwo}</h1>
        <button
          onClick={() => dispatchTwo({ type: "increment", increment: 5 })}
        >
          Increment
        </button>
        <button
          onClick={() => dispatchTwo({ type: "decrement", increment: 1 })}
        >
          Decrement
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default MultipleUseReducer;
