import React from 'react';
import './Navbar.css';
import logo from './main-logo.png'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Intience Logo" className="logo-image" />
        </div>
        <nav className="navbar-links">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/InternshipPage"><li>Internships</li></Link>
            <Link to="/project"><li>Projects</li></Link>
            <Link to="/about_us"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
            <Link to="/hackton"><li>Hackathons</li></Link>
            <Link to="/signup"><li>Sign Up</li></Link>
            <Link to="/admin"><li>Admin Dashboard</li></Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
