import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Airbnb Clone</h2>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/properties">Stays</NavLink></li>
        <li><NavLink to="/about">Experiences</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/favorites">❤️ Favorites</NavLink></li>
      </ul>

      <div className="profile-btn">
        <span>🌐</span>
        <span>☰</span>
        <span>👤</span>
      </div>
    </nav>
  );
}

export default Navbar;