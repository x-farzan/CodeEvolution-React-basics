import React, { useState } from "react";

function HooksUseStateWithObj() {
  const [obj, setObj] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <div>
        <h1>{JSON.stringify(obj)}</h1>
      </div>
      <label>FirstName</label>
      <input
        type="text"
        value={obj.firstName}
        onChange={(e) => setObj({ ...obj, firstName: e.target.value })}
      ></input>

      <label>LastName</label>
      <input
        type="text"
        value={obj.lastName}
        onChange={(e) => setObj({ ...obj, lastName: e.target.value })}
      ></input>
    </div>
  );
}

export default HooksUseStateWithObj;
