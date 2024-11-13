import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Login from '../pages/Login'; // Correct import path
import Signup from '../pages/Signup'; // Correct import path
import './LandingPage.css';
import Logo from '../assets/logo.jpg';

const LandingPage = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const toggleSignupPopup = () => {
    setShowSignupPopup(!showSignupPopup);
  };

  return (
    <div className="landing-page">
      <Navbar />
      <header className="landing-header">
        <img src={Logo} alt="QueueBy6 Logo" className="app-logo" />
        <h1>Welcome!</h1>
        <p>Your efficient solution for scheduling patient appointments.</p>
      </header>
      <div className="hero-section">
        <button onClick={toggleLoginPopup} className="hero-button">Login</button>
        <button onClick={toggleSignupPopup} className="hero-button">Sign up</button>
      </div>
      {showLoginPopup && <Login closePopup={toggleLoginPopup} />}
      {showSignupPopup && <Signup closePopup={toggleSignupPopup} />}
    </div>
  );
};

export default LandingPage;