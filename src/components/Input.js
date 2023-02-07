import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  highlightFocus() {
    this.input.current.focus();
  }

  render() {
    return (
      <div>
        <label>Input : </label>
        <input type="text" ref={this.input} />
      </div>
    );
  }
}

export default Input;
