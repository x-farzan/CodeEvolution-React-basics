import React, { useState } from "react";
import MouseHook from "./MouseHook";

function MouseContainer() {
  const [state, setState] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          console.log(`Display toggled ------ `);
          setState(!state);
        }}
      >
        Toggle display
      </button>
      {state && <MouseHook />}
    </div>
  );
}

export default MouseContainer;
