import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav navbar-dark bg-dark">
        <a href="/" className="navbar-brand ">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
