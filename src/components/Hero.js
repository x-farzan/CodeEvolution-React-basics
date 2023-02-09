import React from "react";

function Hero(props) {
  if (props.name === "Joker") {
    throw new Error("Something went wrong!");
  }
  return <div>{props.name}</div>;
}

export default Hero;
