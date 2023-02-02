import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log(`Button Clicked!!`);
  }
  return (
    <div>
      Functional Component : <button onClick={clickHandler}>Click Me!</button>
    </div>
  );
}

export default FunctionClick;
