import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="container banner">
        <div className="bg-light p-5">
          <h1>A Warm welcome!</h1>
          <p>
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <button className="btn btn-primary py-2">Call to action</button>
        </div>
      </div>
    );
  }
}
