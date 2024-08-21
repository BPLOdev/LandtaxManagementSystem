// Header.js
import React from 'react';
import './Header.scss';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// pics
import logo from '../assets/image/favicon.svg'


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="headerName">
          <IconButton className="menu" color="inherit">
            <MenuRoundedIcon />
          </IconButton>
          <h1 className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          Landtax Management System</h1>
        </div>
        

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
