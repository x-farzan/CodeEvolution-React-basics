import React, { Component } from "react";

class RegComponent extends Component {
  render() {
    console.log("Reg");
    return <div>Reg Comp : {this.props.name}</div>;
  }
}

export default RegComponent;
