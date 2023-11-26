import React from 'react';
import './Intro.scss';

const Intro = (props) => {
  return (
    <div className="intro-layout">
      <img src="/images/park_logo.svg" alt="Park Logo" />
      <div className="buttons-container">
        <div className="buttons-container-home">
        <a href="http://localhost:3000/login">
            <button className="login-button">Login</button>
        </a>
        <a href="http://localhost:3000/register">
          <button className="register-button black-text">Register</button>
        </a>
        </div>
        
      </div>
    </div>
  );
}

export default Intro;
