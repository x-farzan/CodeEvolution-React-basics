import React, { Component } from "react";

export class ClassClink extends Component {
  clickHandler() {
    console.log(`Button clicked!!`);
  }

  render() {
    return (
      <div>
        Class Component : <button onClick={this.clickHandler}>Click Me!</button>
      </div>
    );
  }
}

export default ClassClink;
