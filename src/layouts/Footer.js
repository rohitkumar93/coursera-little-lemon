import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <h3>Contact Us</h3>
        <ul>
          <li>Address: 123 street Block xyz</li>
          <li>Email: food@littlelemon.com</li>
          <li>Phone: 123 123 123</li>
        </ul>
      </nav>
      <nav>
        <h3>Our operating times</h3>
        <ul>
          <li>Monday - Friday: 3:00 - 3:05</li>
          <li>Saturday - Sunday: 10:00 - 10:01</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
