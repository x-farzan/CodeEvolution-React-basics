import React, { useMemo, useState } from "react";

// useMemo()

function Counters() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementCounterOne = () => {
    setCountOne(countOne + 1);
  };

  const incrementCounterTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <div>
        <button onClick={incrementCounterOne}>
          Increment Counter One - {countOne}
        </button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>--------</div>
      <div>
        <button onClick={incrementCounterTwo}>
          Increment Counter Two - {countTwo}
        </button>
      </div>
    </div>
  );
}

export default Counters;
