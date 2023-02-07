import React from "react";

function MemoComponent(props) {
  console.log(`MEMO`);
  return <div>MEMO : {props.name}</div>;
}

export default React.memo(MemoComponent);
