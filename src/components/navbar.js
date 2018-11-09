import React from "react";

const Navbar = props => {
  return (
    <nav className="nav navbar-dark bg-dark">
      <a href="/" className="navbar-brand ">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
