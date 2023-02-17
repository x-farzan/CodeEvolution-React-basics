import React from "react";

function Salary(props) {
  console.log(`Salary component`);
  return <div>Salary Component : {props.salary}</div>;
}

export default React.memo(Salary);
