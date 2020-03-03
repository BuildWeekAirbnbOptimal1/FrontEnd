import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.scss";
import logo from "../assets/airbnb-white.png";
import logogray from "../assets/airbnb-gray.png";

const Navigation = props => {
  return (
    <div
      className="navbar"
      id={`${props.location.pathname !== "/" &&
        props.location.pathname !== "/register" &&
        "dark-nav"}`}
    >
      {props.location.pathname === "/" ||
      props.location.pathname === "/register" ? (
        <img id="logo" src={logo} alt="logo" />
      ) : (
        <img id="logo" src={logogray} alt="logo" />
      )}

      <nav>
        <ul>
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
