import React from "react";
import { Link } from "react-router-dom";
import Food from "../assets/Food.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="left-side">
        <h1>Little Lemon Restaurant</h1>
        <h2>New York</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar tristique consequat.
        </p>
        <button>
          <Link to="/booking">Book a table</Link>
        </button>
      </div>
      <div className="right-side">
        <img src={Food} alt="food" />
      </div>
    </header>
  );
};

export default Header;
