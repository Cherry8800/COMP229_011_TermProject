import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // CSS file for styling
import Logo from '../assets/logo.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* App Name and Logo */}
      <header className="landing-header">
        <img src={Logo} alt="QueueBy6 Logo" className="app-logo" />
        <h1>QueueBy6</h1>
        <p>Your efficient solution for scheduling patient appointments.</p>
      </header>

      {/* Hero Section with a Button */}
      <div className="hero-section">
        <Link to="/login" className="hero-button">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
