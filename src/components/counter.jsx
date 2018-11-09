import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = () => {
    console.log("Increment", this);
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleIncrement} className="btn btn-secondary">
          Increment
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
