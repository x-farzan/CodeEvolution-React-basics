import React, { useContext } from "react";
import ComponentY from "./ComponentY";

function ComponentX() {
  return (
    <div>
      ComponentX
      <ComponentY />
    </div>
  );
}

export default ComponentX;
