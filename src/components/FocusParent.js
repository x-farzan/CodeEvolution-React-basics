import React, { Component } from "react";
import Input from "./Input";

class FocusParent extends Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
  }

  changeFocus = () => {
    this.parentRef.current.highlightFocus();
  };

  render() {
    return (
      <div>
        <Input ref={this.parentRef} />
        <button onClick={this.changeFocus}>Click Me!!</button>
      </div>
    );
  }
}

export default FocusParent;
