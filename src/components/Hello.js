import React from "react";

const Hello = () => {
  // With JSX
  return (
    <div className="dummyClass">
      <h1>Hi, I am testing componenet with JSX!!</h1>
    </div>
  );
  // Without JSX
  return React.createElement(
    "div",
    { id: 1, className: "sdummyClass" },
    React.createElement("h1", null, "Hi, I am testing component without JSX!")
  );
};

export default Hello;
