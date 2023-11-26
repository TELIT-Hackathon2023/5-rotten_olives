import React from 'react';
import './Account.scss';
import { NavLink } from 'react-router-dom';

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
        <input type="text" id="username" name="username" placeholder="Enter Your Username" />
      </div>
      <div className="password-container">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter Your Password" />
      </div>
      <div className="buttons-container">
        <NavLink to={'/reserve'}>
          <button className="account-button">Login</button>
        </NavLink>
        <a href="http://localhost:3000/register">New here? Create account</a>
      </div>

    </div>
  );
}

export default Login;
