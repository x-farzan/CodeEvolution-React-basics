import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome!",
    };
  }

  changeState = () => {
    this.setState({
      message: "Thank you, for clicking!",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        Class Event Bind : <button onClick={this.changeState}>Click Me!</button>
      </div>
    );
  }
}

export default EventBind;
