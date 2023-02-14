import React, { useEffect, useState } from "react";

// UseEffect renders everytime,
//  To restrict everytime redering
//      a. You can pass empty array as second param to render once, replicates ------- componentDidMount();
//      b. You can pass states/props in second param as array to update conditionally, replicates ----- componentDidUpdate();
//
//  To replicate ------- componentWillUnmount(),
//      useEffect can return a function that is called on cleanup

function MouseHook() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log(`Mouse Event logged`);
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log(`useEffect called`);
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      X - {X}, Y - {Y}
    </div>
  );
}

export default MouseHook;
