import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement() {
    console.log("Increment", this);
  }
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.renderTags()}</div>
        <button onClick={this.handleIncrement} className="btn btn-secondary">
          Increment
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
