import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parent: "Parent",
    };
  }

  greetParent = (childName) => {
    alert(`Hello ${this.state.parent} from ${childName}`);
  };

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
