import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    return (
      <button onClick={this.props.incrementCounter}>
        {this.props.name} Clicked {this.props.count} counter
      </button>
    );
  }
}

export default withCounter(ClickCounter);
