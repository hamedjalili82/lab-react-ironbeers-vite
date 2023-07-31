import React, { useState, useEffect } from "react";

function RandomBeersPage() {
    const [randoomBeer, setRandomBeer] = useState(null);

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((response) => response.json())
        .then((data) => setRandomBeer(data))
        .catch((error) => console.log('Error fetching random beer:', error))
    }, [])
    
    if (!randoomBeer){
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img src={randoomBeer.image_url} alt={randoomBeer.name} />
            <h2>{randoomBeer.name}</h2>
            <p>{randoomBeer.tagline}</p>
            <p>First Brewed: {randoomBeer.first_brewed}</p>
            <p>Attenuation Level: {randoomBeer.attenuation_level}</p>
            <p>Description: {randoomBeer.description}</p>
            <p>Contributed by: {randoomBeer.contributed_by}</p>
        </div>
    )
}

export default RandomBeersPage;
