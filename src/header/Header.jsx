import React from 'react';
import './Header.scss';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import logo from '../assets/image/favicon.svg';

// Function to generate color and initials for the avatar
function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const Header = () => {
  return (
    <header className="header">
      <div className='header-tint'></div>
      <div className="container">
        <div className="headerName">
          <IconButton className="menu" color="inherit">
            <MenuRoundedIcon sx={{ fontSize: '33px' }} />
          </IconButton>
          <h1 className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
            REAL PROPERTY TAX MANAGEMENT SYSTEM
          </h1>
        </div>
        <div>
          {/* Avatar */}
          <Stack direction="row" spacing={2} className="avatar-stack">
            <Avatar {...stringAvatar('Yman Purdy')} />
          </Stack>
        </div>
      </div>
    </header>
  );
};

export default Header;
