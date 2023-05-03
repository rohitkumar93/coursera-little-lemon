import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>

        <li>
          <a href="#order-online">Order Now!</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
