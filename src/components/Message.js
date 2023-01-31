import { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello! Visitor!",
    };
  }

  changeState() {
    this.setState({
      message: "Thank you for subscribing!",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.changeState();
          }}
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export default Message;
