// Header.js
import React from 'react';
import './Header.scss';
import logo from '../assets/image/favicon.svg'
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="headerName">
          <IconButton className="menu" color="inherit">
            <MenuRoundedIcon />
          </IconButton>

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
