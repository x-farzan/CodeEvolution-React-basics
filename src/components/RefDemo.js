import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(`componentDidMount() `, this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <label>Username : </label>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click Here!</button>
      </div>
    );
  }
}

export default RefDemo;
