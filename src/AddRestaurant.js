//AddRestaurants.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AddRestaurant = ({ editMode = false }) => {
  const location = useLocation();

  // Initialize formData with empty strings
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

  // useEffect to update state when initialFormData becomes available
  useEffect(() => {
    if (editMode && location.state?.initialFormData) {
      const { initialFormData } = location.state;
      setFormData({
        portalUsername: initialFormData.portalUsername || '',
        password: initialFormData.password || '',
        name: initialFormData.name || '',
        location: initialFormData.location || '',
        cuisine: Array.isArray(initialFormData.cuisine) ? initialFormData.cuisine.join(',') : '',
        menu: initialFormData.menu || '',
        openingHours: initialFormData.openingHours || '',
        sortieType: initialFormData.sortieType || '',
        Tables: initialFormData.Tables?.toString() || '',
      });
    }
  }, [editMode, location.state]);

  console.log('Form Data State:', formData);

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
    const method = editMode ? 'PUT' : 'POST';
    const url = editMode ? `http://localhost:5000/restaurants/${formData._id}` : 'http://localhost:5000/restaurants';
  
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(editMode ? 'Restaurant updated:' : 'Restaurant added:', data);
      // Add this line to show an alert when the restaurant is successfully added
      window.alert("New Restaurant Added to Database");
  
      // Optionally reset form or redirect user
      // Add logic here if you want to reset the form or redirect
    } catch (error) {
      console.error('Error adding/updating restaurant:', error);
    }
  };
  
  

  return (
    <div className="main-container">
      <div className="container">
        <h1>{editMode ? 'Edit Restaurant' : 'Add a New Restaurant'}</h1>
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
          <button type="submit">{editMode ? 'Update Restaurant' : 'Add New Restaurant'}</button>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurant;
