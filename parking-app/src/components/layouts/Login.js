import React from 'react';
import './Account.scss';

const Login = (props) => {
  return (
    <div className="account-layout">
      <img src="/images/park_logo.svg" alt="Park Logo" />
      <div className="header">
        <font size="6">  
          Login 
        </font>  
      </div>
      <div className="user-container">
        <label htmlFor="username">User:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" />
      </div>
      <div className="password-container">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />
      </div>
      <div className="buttons-container">
        <button className="account-button">Login</button>
      </div>
    </div>
  );
}

export default Login;
