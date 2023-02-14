import React, { useContext } from "react";
import { UserContext } from "../App";

function ComponentZ() {
  const user = useContext(UserContext);

  return (
    <div>
      ComponentZ
      <div>{user.name}</div>
    </div>
  );
}

export default ComponentZ;
