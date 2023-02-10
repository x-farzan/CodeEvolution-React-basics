import React, { Component } from "react";

class ClickCounterTwo extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCounter}>
          Clicked {this.props.count} times!!
        </button>
      </div>
    );
  }
}

export default ClickCounterTwo;
