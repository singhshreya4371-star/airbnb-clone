import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Airbnb Clone</h2>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/properties">Stays</NavLink></li>
        <li><NavLink to="/about">Experiences</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
       <li>
  <NavLink to="/favorites">❤️ Favorites</NavLink>
</li>
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