import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/logo-ecom.png";

function Navbar() {
  return (
    <header>
      <nav className="Nav">
        <div className="logo-container"> 
        <img className="Logo" src={mainLogo} alt="E-Commerce Logo" />
        </div>
        <ul className="Nav-bar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/apparel">Apparel</Link></li>
          <li><Link to="/sneakers">Sneakers</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
        <div className="search-container">
          <input type="text" id="search-input" placeholder="Search..."/>
          <button id="search-button">Search</button>
        </div>
        <ul id="results-list"></ul>
      </nav>
    </header>
  );
}

export default Navbar;
