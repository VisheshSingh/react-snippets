import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = e => {
    console.log(e);
    this.setState({
      count: this.state.count + 1
    });
  };

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  renderClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.renderClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handleIncrement("blah blah blah");
          }}
          className="btn btn-secondary"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
