import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    postTitle: "Title",
    postBody: "Body",
  };

  componentDidUpdate(prevProps) {
    console.log("component did mount");
    if (this.props.id && this.props.id !== prevProps.id) {
      const getUrl =
        "https://jsonplaceholder.typicode.com/posts/" + this.props.id;
      axios.get(getUrl).then((response) => {
        this.setState({
          postTitle: response.data.title,
          postBody: response.data.body,
        });
      });
    }
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = (
        <div className="FullPost">
          <h1>{this.state.postTitle}</h1>
          <p>{this.state.postBody}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
