import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <div className="py-2">
    <div className="col-md-5">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="https://connornally.github.io/Portfolio_2020/">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/ConnorNally">
            Github
          </a>
        </li>
      </ul>
    </div>
    <div className="col-md text-md-right">
      <small>&copy; 2020 V2 Rocket Experiment Connor Nally</small>
    </div>
  </div>
);

export default Footer;
