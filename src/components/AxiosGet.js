import React, { Component } from "react";
import axios from "axios";

class AxiosGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: null,
    };
  }

  componentDidMount = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(`Axios success : `);
        this.setState({
          posts: response.data,
        });
      })
      .catch((err) => {
        this.setState({
          errMsg: err,
        });
      });
  };

  render() {
    return (
      <div>
        Starting to get posts....
        {this.state.posts.length
          ? this.state.posts.map((post) => {
              return <div key={post.id}>{post.title}</div>;
            })
          : null}
        If error occurs? See this section
        {this.state.errorMsg ? this.state.errorMsg : null}
      </div>
    );
  }
}

export default AxiosGet;
