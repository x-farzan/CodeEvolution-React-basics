import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  changeState() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button
          onClick={() => {
            this.changeState();
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
