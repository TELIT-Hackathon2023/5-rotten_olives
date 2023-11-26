import React from 'react';
import './Intro.scss';

const Intro = (props) => {
  return (
    <div className="intro-layout">
      <img src="/images/park_logo.svg" alt="Park Logo" />
      <div className="buttons-container">
        <button className="login-button">Login</button>
        <button className="register-button black-text">Register</button>
      </div>
    </div>
  );
}

export default Intro;
