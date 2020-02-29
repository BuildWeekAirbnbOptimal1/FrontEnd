import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.scss";
import logo from "../assets/airbnb-white.png";
import logogray from "../assets/airbnb-gray.png";

const Navigation = props => {
  return (
    <div
      className={`navbar ${
        props.location.pathname !== "/" ? "other-nav" : null
      }`}
    >
      {props.location.pathname === "/" ? (
        <img id="logo" src={logo} alt="logo" />
      ) : (
        <img id="logo" src={logogray} alt="logo" />
      )}

      <nav>
        <ul className="dark-nav">
          <li>
            <a href="#">About</a>
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
