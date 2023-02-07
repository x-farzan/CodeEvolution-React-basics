import React, { Component } from "react";
import PPureComponent from "./PPureComponent";
import RegComponent from "./RegComponent";

class PParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Farzan",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Farzan",
      });
    }, 2000);
  }

  render() {
    return (
      <React.Fragment>
        Parent Comp
        <RegComponent name={this.state.name} />
        <PPureComponent name={this.state.name} />
      </React.Fragment>
    );
  }
}

export default PParentComponent;
