import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="nav navbar-dark bg-dark">
      <a href="/" className="navbar-brand ">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
