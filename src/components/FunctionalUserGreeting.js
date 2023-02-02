import React, { useState } from "react";

function FunctionalUserGreeting() {
  const [state, setState] = useState(false);

  const changeStateToLogout = () => {
    setState(false);
  };
  const changeStateToLogin = () => {
    setState(true);
  };

  // Conditional rendering

  // 1. By using if/else or variables
  //   let stateHolder;
  //   if (state) {
  //     stateHolder = (
  //       <div>
  //         <h1>Welcome Farzan</h1>
  //         <button onClick={changeStateToLogout}>Log Out</button>
  //       </div>
  //     );
  //   } else {
  //     stateHolder = (
  //       <div>
  //         <h1>Welcome Visitor</h1>
  //         <button onClick={changeStateToLogin}>Log In</button>
  //       </div>
  //     );
  //   }
  //   return <div>{stateHolder}</div>;

  // 2. By using ternary operator
  //   return state ? (
  //     <div>
  //       <h1>Welcome Farzan</h1>
  //       <button onClick={changeStateToLogout}>Log Out</button>
  //     </div>
  //   ) : (
  //     <div>
  //       <h1>Welcome Visitor</h1>
  //       <button onClick={changeStateToLogin}>Log In</button>
  //     </div>
  //   );

  //3. by using short circuit
  return (
    state && (
      <div>
        <h1>Welcome Farzan</h1>
        <button onClick={changeStateToLogout}>Log Out</button>
      </div>
    )
  );
}

export default FunctionalUserGreeting;
