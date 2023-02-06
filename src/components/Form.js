import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }

  changeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  changeComments = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  changeTopic = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  submitHandler = (event) => {
    alert(
      `${this.state.username}, ${this.state.comments}, ${this.state.topic}`
    );
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.changeUsername}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.changeComments}
          />
        </div>
        <div>
          <select value={this.state.topic} onChange={this.changeTopic}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
  text;
}

export default Form;
