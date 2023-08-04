import React from 'react';
import logo from '../assets/logo.png';
import '../Styling/MyHeader.css'; // Create a CSS file for styling

function MyHeader() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="#">Home</a>
            <span className="icon">🏠</span>
          </li>
          <li>
            <a href="#">Search</a>
            <span className="icon">🔍</span>
          </li>
          <li>
            <a href="#">Watchlist</a>
            <span className="icon">📺</span>
          </li>
          <li>
            <a href="#">Originals</a>
            <span className="icon">🎬</span>
          </li>
          <li>
            <a href="#">Movies</a>
            <span className="icon">🍿</span>
          </li>
          <li>
            <a href="#">Series</a>
            <span className="icon">📺</span>
          </li>
        </ul>
      </nav>
      <div className="sign-out-container">
        <button className="sign-out-button">
          Sign Out
          <span className="icon">🚪</span>
        </button>
      </div>
    </header>
  );
}

export default MyHeader;