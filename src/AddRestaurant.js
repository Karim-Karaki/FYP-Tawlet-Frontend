// AddRestaurant.js 

import React, { useState } from 'react';

const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    portalUsername: '',
    password: '',
    name: '',
    location: '',
    cuisine: '',
    menu: '',
    openingHours: '',
    sortieType: '', 
    Tables: '',  
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const updatedValue = id === 'cuisine' ? value.split(',') : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: id === 'Tables' ? Number(updatedValue) || '' : updatedValue,
    }));
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/restaurants', { // Use the full URL from Postman
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Assuming you're sending JSON data
        },
        body: JSON.stringify(formData) // Convert your form data to JSON
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Restaurant added:', data);
      // Optionally reset form or redirect user
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };
  

  return (
    <div className="main-container">
      <div className="container">
      <h1>Add a New Restaurant</h1>
      <form id="addRestaurantForm" onSubmit={handleSubmit}>
        <input type="text" id="portalUsername" placeholder="Portal Username" required value={formData.portalUsername} onChange={handleInputChange} />
        <input type="password" id="password" placeholder="Password" required value={formData.password} onChange={handleInputChange} />
        <input type="text" id="name" placeholder="Name" required value={formData.name} onChange={handleInputChange} />
        <input type="text" id="location" placeholder="Location" required value={formData.location} onChange={handleInputChange} />
        <input type="text" id="cuisine" placeholder="Cuisine (comma-separated)" required value={formData.cuisine} onChange={handleInputChange} />
        <input type="url" id="menu" placeholder="Menu URL" value={formData.menu} onChange={handleInputChange} required />
        <input type="text" id="openingHours" placeholder="Opening Hours" required value={formData.openingHours} onChange={handleInputChange} />
        <input type="text" id="sortieType" placeholder="Sortie Type" value={formData.sortieType} onChange={handleInputChange} />
        <input type="number" id="Tables" placeholder="Tables" value={formData.Tables} onChange={handleInputChange} />
        {/* Add other input elements for additional fields here */}
        <button type="submit">Add New Restaurant</button>
      </form>
    </div>
    </div>

  );
};

export default AddRestaurant;
