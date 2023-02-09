import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.incrementCounter}>
          {this.props.name} Hovered {this.props.count} counter
        </h1>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
