import React from "react";

function FunctionalChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("Child")}>Click here</button>
    </div>
  );
}

export default FunctionalChildComponent;
