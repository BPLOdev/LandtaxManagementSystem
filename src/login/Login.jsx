import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';  // Material-UI Button
import './Login.scss';
// pics
import logo from '../assets/image/favicon.svg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/assessment-roll');
  };

  return (
    <div className='background'>
        <div className='tint'>
        </div>
        <div className="login-container">
            <div>
                <img src={logo} alt="Logo" className="logo-img" />
            </div>
            <div className='logoname'>
                <h1>LAND TAX MANAGEMENT SYSTEM</h1>
            </div>
            <Box 
              component="form"
              sx={{
                '& > :not(style)': { 
                    m: 1, 
                    width: '280px',
                },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{
                    '& .MuiInputBase-input': {
                      height: '15px', // Adjust height as needed
                      fontSize: '14px' // Adjust font size if needed
                    }
                  }}
                />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  sx={{
                    '& .MuiInputBase-input': {
                      height: '15px', // Adjust height as needed
                      fontSize: '15px' // Adjust font size if needed
                    }
                  }}
                />
                <h1>Forgot password?</h1>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary"
                  sx={{
                    width: '280px', // Makes the button take full width of its container
                    height: '35px', // Adjust height as needed
                    fontSize: '14px', // Adjust font size if needed
                  }}
                >
                  Login
                </Button>
            </Box>
        </div>
    </div>
  );
};

export default Login;
