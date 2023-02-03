import React, { useState } from "react";
import FunctionalChildComponent from "./FunctionalChildComponent";

function FunctionalParentComponent() {
  const [state, setState] = useState("Parent");

  const greetParent = (childName) => {
    alert(`Hello ${state} from ${childName}`);
  };

  return (
    <div>
      <FunctionalChildComponent greetHandler={greetParent} />
    </div>
  );
}

export default FunctionalParentComponent;
