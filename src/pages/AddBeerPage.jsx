
import React, { useState } from 'react';

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error adding beer.');
        }
        return response.json();
      })
      .then((data) => {
        console.log('New beer added:', data);
        
      })
      .catch((error) => console.error('Error adding beer:', error));
  };

  return (
    <div>
      <h2>Add a New Beer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="tagline">Tagline:</label>
          <input
            type="text"
            id="tagline"
            name="tagline"
            value={formData.tagline}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="first_brewed">First Brewed:</label>
          <input
            type="text"
            id="first_brewed"
            name="first_brewed"
            value={formData.first_brewed}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="brewers_tips">Brewer's Tips:</label>
          <input
            type="text"
            id="brewers_tips"
            name="brewers_tips"
            value={formData.brewers_tips}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="attenuation_level">Attenuation Level:</label>
          <input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contributed_by">Contributed By:</label>
          <input
            type="text"
            id="contributed_by"
            name="contributed_by"
            value={formData.contributed_by}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Add Beer</button>
        </div>
      </form>
    </div>
  );
}

export default AddBeerPage;
