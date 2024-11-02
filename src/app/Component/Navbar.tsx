"use client";
import React, { useState } from "react";

interface NavbarProps {
  setShowLogin: any;
}

const Navbar: React.FC<NavbarProps> = ({ setShowLogin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/Images/favuroite-foodlogo.png" alt="logo" />
      </div>

      <ul className={`nav-list ${isOpen ? "show" : ""}`}>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#explore-menu">Menu</a>
        </li>
        <li>
          <a href="#footer">Contact Us</a>
        </li>
      </ul>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </div>

      <button onClick={() => setShowLogin(true)} className="sign-btn">
        Sign Up
      </button>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
