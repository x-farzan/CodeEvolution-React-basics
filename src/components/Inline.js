import React from "react";

function Inline() {
  const heading = {
    color: "purple",
    fontStyle: "italic",
    fontSize: "72px",
  };
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  );
}

export default Inline;
