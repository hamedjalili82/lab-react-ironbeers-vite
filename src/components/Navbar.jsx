import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import homeIcon from '../assets/home-icon.png'

function Navbar() {
    return (
      <nav>
        <Link to="/" className='home-link'>
          <img src={homeIcon} alt='Home' className='home-icon' />
        </Link>
      </nav>
    );
  }

export default Navbar;
