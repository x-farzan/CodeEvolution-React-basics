import { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>
          Hi, I am {this.props.name} a.k.a {this.props.superHero}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
