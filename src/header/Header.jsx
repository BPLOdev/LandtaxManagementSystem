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
      <div className='header-tint'>
      </div>
      <div className="container">
        <div className="headerName">
          <IconButton className="menu" color="inherit">
            <MenuRoundedIcon />
          </IconButton>
          <h1 className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          Landtax Management System</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
