
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function BeerDetailsPage() {
    const { beerId } = useParams();
    const [beerDetais, setBeerDetails] = useState(null);

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response) => response.json())
        .then((data) => setBeerDetails(data));
    }, [beerId]);

    if (!beerDetais) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <img src={beerDetais.image_url} alt={beerDetais.name} />
            <h2>{beerDetais.name}</h2>
            <p>{beerDetais.tagline}</p>
            <p>First brewed: {beerDetais.first_brewed}</p>
            <p>Attenuation Level: {beerDetais.attenuation_level}</p>
            <p>Description: {beerDetais.description}</p>
            <p>Contributed By: {beerDetais.contributed_by}</p>
        </div>
    );

}

export default BeerDetailsPage;
