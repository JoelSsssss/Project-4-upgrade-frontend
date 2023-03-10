import React from 'react';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
// import { useAuthenticated } from '../hook/useAuthenticated';
// import { AUTH } from '../lib/auth';
// import '../styles/NavBar.scss';

import '../styles/NavbarStyls.scss';

export default function Navbar() {
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useAuthenticated();

  // const logout = () => {
  //   AUTH.logout();
  //   setIsLoggedIn(false);
  //   navigate('/');
  // };

  return (
    <div className='all-the-navbar'>
      <Toolbar variant='dense' className='Navbar'>
        <Link to='/'>
          <Typography variant='h6' color='white' component='div' sx={{ mr: 2 }}>
            Home Page
          </Typography>
        </Link>
        <Link to='/usercards'>
          <Typography variant='h6' color='white' component='div' sx={{ mr: 2 }}>
            User Made Cards
          </Typography>
        </Link>
        <Link to='/usercards/create'>
          <Typography variant='h6' color='white' component='div' sx={{ mr: 2 }}>
            Create Your Own card
          </Typography>
        </Link>
        <div className='login'>
          <Link to='/auth/login/'>
            <Typography
              variant='h6'
              color='inherit'
              component='div'
              sx={{ mr: 2, color: 'red' }}
            >
              Login
            </Typography>
          </Link>
          <img
            className='logo'
            src='https://i.imgur.com/I0sqrlZ.png'
            alt='logo'
          />
        </div>
        {/* {AUTH.getPayload().isAdmin && (
            <>
              <Link to='/categories/edit'>
                <Typography
                  variant='h6'
                  color='inherit'
                  component='div'
                  sx={{ mr: 2, color: 'black' }}
                >
                  Edit Categories
                </Typography>
              </Link>
              <Link to='/brands/create'>
                <Typography
                  variant='h6'
                  color='inherit'
                  component='div'
                  sx={{ mr: 2, color: 'black' }}
                >
                  Create Brand
                </Typography>
              </Link>
            </>
          )} */}
        {/* 
          {isLoggedIn ? (
            <>
              <Link to='/products/create'>
                <Typography
                  variant='h6'
                  color='inherit'
                  component='div'
                  sx={{ mr: 2, color: 'black' }}
                >
                  Add Product
                </Typography>
              </Link>
              <Link to='/users'>
                <Typography
                  variant='h6'
                  color='inherit'
                  component='div'
                  sx={{ mr: 2, color: 'black' }}
                >
                  Users
                </Typography>
              </Link>
              <Link to='/' onClick={logout}>
                <Typography
                  variant='h6'
                  color='inherit'
                  component='div'
                  sx={{ mr: 2, color: 'black' }}
                >
                  Logout
                </Typography>
              </Link>
            </>
          ) : (
            <>
              <Link to='/register'>
                <Typography
                  variant='h6'
                  color='inherit'
                  component='div'
                  sx={{ mr: 2, color: 'black' }}
                >
                  Register
                </Typography>
              </Link>
              <Link to='/login'>
                <Typography
                  variant='h6'
                  color='inherit'
                  component='div'
                  sx={{ mr: 2, color: 'black' }}
                >
                  Login
                </Typography>
              </Link>
            </>
          )} */}
      </Toolbar>
    </div>
  );
}
