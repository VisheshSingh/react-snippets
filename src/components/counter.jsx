import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: "24px"
  };

  formatCount() {
    let { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span className="badge badge-primary m-2" style={this.styles}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
