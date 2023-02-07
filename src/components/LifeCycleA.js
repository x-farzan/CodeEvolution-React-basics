import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

/**
 * Lifecyle steps
 * a. constructor()
 * b. getDerivedStateFromProps()
 * c. render()
 * d. componentDidMount()
 */
class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Farzan",
    };

    console.log("lifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`LifeCycleA getDerivedStateFromProps`);
    return null;
  }

  componentDidMount() {
    console.log(`LifeCycleA componentDidMount`);
  }

  render() {
    console.log(`LifeCycleA render`);
    return (
      <div>
        <div>LifeCycleA</div>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
