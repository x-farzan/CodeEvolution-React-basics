import React, { useEffect, useState } from "react";

function HookCounterWithUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`Updating.......`);
    document.title = `Clicked ${count} times`;
  }, [count ]);

  return (
    <div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
      </div>
    </div>
  );
}

export default HookCounterWithUseEffect;
