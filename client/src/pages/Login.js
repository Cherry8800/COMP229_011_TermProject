import React from 'react';
import Navbar from '../components/Navbar';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <Navbar />
      <div className="login-content">
        <h2>Login Page</h2>
        {/* Login form or other content goes here */}
      </div>
    </div>
  );
};

export default Login;
