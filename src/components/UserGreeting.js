import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  changeStateToLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  changeStateToLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    // Conditional Rendering with
    // 1. By if/else
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <h1>Welcome Farzan</h1>
    //       <button onClick={this.changeStateToLogout}>Log Out</button>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>Welcome Visitor</h1>
    //       <button onClick={this.changeStateToLogin}>Log In</button>
    //     </div>
    //   );
    // }

    // 2. By using variables.
    // let stateHolder;
    // if (this.state.isLoggedIn) {
    //   stateHolder = (
    //     <div>
    //       <h1>Welcome Farzan</h1>
    //       <button onClick={this.changeStateToLogout}>Log Out</button>
    //     </div>
    //   );
    // } else {
    //   stateHolder = (
    //     <div>
    //       <h1>Welcome Visitor</h1>
    //       <button onClick={this.changeStateToLogin}>Log In</button>
    //     </div>
    //   );
    // }
    // return <div>{stateHolder}</div>;

    // 3. By ternary Operator
    return this.state.isLoggedIn ? (
      <div>
        <h1>Welcome Farzan</h1>
        <button onClick={this.changeStateToLogout}>Log Out</button>
      </div>
    ) : (
      <div>
        <h1>Welcome Visitor</h1>
        <button onClick={this.changeStateToLogin}>Log In</button>
      </div>
    );

    // 4. By Short circuit operator
    // return (
    //   this.state.isLoggedIn && (
    //     <div>
    //       <h1>Welcome Farzan</h1>
    //       <button onClick={this.changeStateToLogout}>Log Out</button>
    //     </div>
    //   )
    // );
  }
}

export default UserGreeting;
