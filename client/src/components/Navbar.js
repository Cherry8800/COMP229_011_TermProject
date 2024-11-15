import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo1 from '../assets/logo1.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo1} alt="QueueBy6 Logo" className="app-logo" />
          <span className="navbar-logoword">QUEUECARE</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;