import React, { Component } from "react";

/**
 * Lifecyle steps
 * 1. Upon Initial render
 *    a. constructor()
 *    b. getDerivedStateFromProps()
 *
 * 2. Upon clicking button for state change
 *    a. getDerivedStateFromProps()
 *    b. shouldComponentUpdate()
 *    c. render()
 *    d. getSnapshotBeforeUpdate()
 *    e. componentDidUpdate()
 */

class UpdateLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Farzan",
    };
    console.log(`LifeCycleA Constructor >>>>> `);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`LifeCycleA getDerivedStateFromProps`);
    return null;
  }

  shouldComponentUpdate() {
    console.log(`LifeCycleA shouldCompoentnUpdate`);
    return true;
  }

  getSnapshotBeforeUpdate(prevState, prevProps) {
    console.log(`LifeCycleA getSnapshotBeforeUpdate`);
  }

  componentDidUpdate() {
    console.log(`LifeCycleA componentDidUpdate`);
  }

  changeState = () => {
    console.log(`LifeCycleA changeState`);
    this.setState({
      name: "Uzair",
    });
  };

  render() {
    console.log(`Render`);
    return (
      <div>
        <div>
          <button onClick={this.changeState}>Click Me!</button>
        </div>
      </div>
    );
  }
}

export default UpdateLifeCycle;
