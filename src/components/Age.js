import React from "react";

function Age(props) {
  console.log(`Age component`);
  return <div>Age Component : {props.age}</div>;
}

export default React.memo(Age);
