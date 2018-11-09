import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  formatvalue() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }

  renderClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <span className={this.renderClasses()}>{this.formatvalue()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary">
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
