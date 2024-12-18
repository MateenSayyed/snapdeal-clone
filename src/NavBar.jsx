import React from "react";
import "./Navbar.css"; // Link to the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="page-wrapper nav-wrapper">
        <a href="/" className="navbar-logo">
          snapdeal
        </a>

        <div className="navbar-search">
          <input type="text" placeholder="Search products & brands" />
          <button className="search-btn">Search</button>
        </div>

        <div className="navbar-icons">
          <i className="fa fa-shopping-cart"></i>
          <i className="fa fa-user-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
