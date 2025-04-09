import React from "react";
import "./Navbar.css";
import logo from '../../assets/logo.png'

const Navbar = () => {
  return <nav className="container">
    <img src={logo} alt="logo" className="logo" />
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Testimonial</li>
        <li>Reviews</li>
        <li><button className="btn">Contact</button></li>
    </ul>
  </nav>;
};

export default Navbar;
