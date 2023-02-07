import React, { PureComponent } from "react";

/**
 * Pure componet implemnts shouldComponentUpdate() lifecycle method, if it indicates the change in state or props then it
 * Re-renders.
 *
 * Whereas, Regular Component do not implements shouldComponentUpdate() lifecycle method, therefore it re-renders
 * every time props are passed or state is changed.
 */

class PPureComponent extends PureComponent {
  render() {
    console.log(`Pure`);
    return <div>Pure Comp : {this.props.name}</div>;
  }
}

export default PPureComponent;
