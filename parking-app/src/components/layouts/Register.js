import React from 'react';
import './Account.scss';

const Register = (props) => {
  return (
    <div className="account-layout">
      <img src="/images/park_logo.svg" alt="Park Logo" />
      <div className="header">
        <font size="6">  
          Register 
        </font>  
      </div>
      <div className="user-container">
        <label htmlFor="username">User:</label>
        <input type="text" id="username" name="username" placeholder="Enter Username" />
      </div>
      <div className="password-container">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter Password" />
      </div>
      <div className="key-container">
        <label htmlFor="key">Key:</label>
        <input type="text" id="key" name="key" placeholder="Enter Key" />
      </div>
      <div className="buttons-container">
        <button className="account-button">Register</button>
        <a href="http://localhost:3000/login">Already have account? Login here!</a>
      </div>
    </div>
  );
}

export default Register;
