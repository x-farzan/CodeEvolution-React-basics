import React, { useEffect, useRef, useState } from "react";

function FocusInput() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      {timer}
      <div>
        <button onClick={() => clearInterval(intervalRef.current)}>
          Clear Interval
        </button>
      </div>
    </div>
  );
}

export default FocusInput;
