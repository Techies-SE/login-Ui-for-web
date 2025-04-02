import React from 'react';
import './Login.css'; // Create a separate CSS file for styling

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo-circle"></div>
      <div className="logo-text">
        <span style={{ color: '#3BA092', fontWeight: 'bold' }}>MFU</span> 
        <span style={{ color: '#C0B257' }}>Wellness Center</span>
      </div>
      <form action="#" method="POST">
        <input
          type="text"
          name="staffid"
          placeholder="Staff-ID"
          className="input-field"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
          required
        />
        <a href="#" className="forgot-password">Forgot Password?</a>
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
}

export default Login;
