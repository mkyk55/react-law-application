
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';
import logo from '../../assets/images/logo.jpg'; // Adjust the path as necessary

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>

          <li className="dropdown">
            <span>Practice Areas</span>
            <ul className="dropdown-content">
              <li><Link to="/services/corporate" onClick={toggleMenu}>Corporate Law</Link></li>
              <li><Link to="/services/criminal" onClick={toggleMenu}>Criminal Law</Link></li>
              <li><Link to="/services/property" onClick={toggleMenu}>Property Disputes</Link></li>

              <li><Link to="/services/corporate" onClick={toggleMenu}>Corporate Law</Link></li>
              <li><Link to="/services/criminal" onClick={toggleMenu}>Criminal Law</Link></li>
              <li><Link to="/services/property" onClick={toggleMenu}>Property Disputes</Link></li>

              <li><Link to="/services/corporate" onClick={toggleMenu}>Corporate Law</Link></li>
              <li><Link to="/services/criminal" onClick={toggleMenu}>Criminal Law</Link></li>
              <li><Link to="/services/property" onClick={toggleMenu}>Property Disputes</Link></li>
            </ul>
          </li>

           <li className="dropdown">
            <span>Our Team</span>
            <ul className="dropdown-content">
              <li><Link to="/success/story" onClick={toggleMenu}>Success Story</Link></li>
            </ul>
          </li>
            <li><Link to="/news" onClick={toggleMenu}>News</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>

    </>
  );
}
