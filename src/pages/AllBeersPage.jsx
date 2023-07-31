
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      <ul>
        {beers.map((beer) => (
          <li key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt={beer.name} style={{ height: '100px' }} />
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <p>Contributed by: {beer.contributed_by}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;

