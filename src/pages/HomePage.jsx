
import React from 'react';
import { Link } from 'react-router-dom';
import allBeersImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";
import './HomePage.css';

function HomePage() {
  return (
    <div className='home-page'>
      <h1>Welcome to the Beer App!</h1>
      <div className='link-container'>
        <Link to="/beers" className='beer-link'>
          <div className='beer-card'>
            <img src={allBeersImage} alt="All Beers" className='beer-image' />
            <h2>All Beers</h2>
          </div>
        </Link>
        <Link to="/random-beer" className='beer-link'>
          <div className='beer-card'>
            <img src={randomBeerImage} alt="Random Beer" className='beer-image' />
            <h2>Random Beer</h2>
          </div>
        </Link>
        <Link to="/new-beer" className='beer-link'>
          <div className='beer-card'>
            <img src={newBeerImage} alt="New Beer" className='beer-image' />
            <h2>New Beer</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
