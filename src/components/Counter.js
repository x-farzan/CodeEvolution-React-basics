import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState(
      (prevState) => ({
        counter: prevState.counter + 1,
      }),
      () => {
        console.log(`Incremental value : `, this.state.counter);
      }
    );
  }

  changeState() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
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
