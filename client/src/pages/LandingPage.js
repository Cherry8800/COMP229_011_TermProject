import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './LandingPage.css';
import Logo from '../assets/logo.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <header className="landing-header">
        <img src={Logo} alt="QueueBy6 Logo" className="app-logo" />
        <h1>Welcome!</h1>
        <p>Your efficient solution for scheduling patient appointments.</p>
      </header>
      <div className="hero-section">
        <Link to="/login" className="hero-button">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;