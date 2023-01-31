import { useState } from "react";

const Follow = () => {
  const [state, setState] = useState("Hello Visitor!");

  const changeState = () => {
    setState("You are now following!");
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => changeState()}>Follow</button>
    </div>
  );
};

export default Follow;
