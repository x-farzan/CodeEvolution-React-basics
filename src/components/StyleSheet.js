import React from "react";
import "./myStyles.css";

function StyleSheet({ primary }) {
  const className = primary ? "primary" : "";
  return (
    <div className={`${className} font`}>
      <h1>StyleSheet</h1>
    </div>
  );
}

export default StyleSheet;
