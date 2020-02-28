import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.scss";

import logo from "../assets/airbnb-white.png";

const Navigation = () => {
  return (
    <div className="navbar">
      <img id="logo" src={logo} alt="logo" />

      <nav>
        <ul className="links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/listings">Listings</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
