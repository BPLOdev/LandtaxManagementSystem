// Header.js
import React from 'react';
import './Header.scss'; // Assuming you have some basic CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Landtax Management System</h1>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
