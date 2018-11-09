import React, { Component } from "react";

class Counter extends Component {
  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  renderClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <span className={this.renderClasses()}>{this.formatvalue()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
