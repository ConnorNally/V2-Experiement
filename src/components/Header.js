import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"> <NavLink className="nav-link mr-0" exact to="/">
              Home <span className="sr-only">(current)</span> </NavLink>
          </li>
          <li className="nav-item"> <NavLink className="nav-link" to="/about">
              About </NavLink> 
          </li>
          <li className="nav-item"> <NavLink className="nav-link" to="/images">
              Images </NavLink>
          </li>
        </ul>
      </div>
    </nav>

    <div className="jumbotron jumbotron-fluid bg-dark">
      <div className="container text-sm-center pt-5">
        <h1 className="display-2">V2 ROCKETS</h1>
        <p className="lead">An API detailing V2 rocket hit locations</p>
      </div>
    </div>
  </div>
);

export default Header;
