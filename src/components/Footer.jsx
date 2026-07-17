import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-section">
        <h2>🏡 StayFinder</h2>
        <p>Find your perfect stay anywhere.</p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>

        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="footer-section">
        <h3>Contact</h3>

        <p>📧 stayfinder@email.com</p>
        <p>📞 +91 98765 43210</p>
      </div>

      <div className="footer-bottom">
        <p>© 2026 StayFinder | Made by Shreya Singh</p>
      </div>

    </footer>
  );
}

export default Footer;