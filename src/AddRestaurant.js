import React, { useState } from 'react';

const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    cuisine: '',
    menu: '',
    openingHours: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: id === 'cuisine' ? value.split(',') : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch.post('/restaurants', formData); // Ensure this URL matches your backend route
      console.log('Restaurant added:', response.data);
      // Optionally reset form or redirect user
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  return (
    <div className="container">
      <h1>Add New Restaurant</h1>
      <form id="addRestaurantForm" onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Name" required value={formData.name} onChange={handleInputChange} />
        <input type="text" id="location" placeholder="Location" required value={formData.location} onChange={handleInputChange} />
        <input type="text" id="cuisine" placeholder="Cuisine (comma-separated)" required value={formData.cuisine} onChange={handleInputChange} />
        <input type="text" id="menu" placeholder="Menu URL" required value={formData.menu} onChange={handleInputChange} />
        <input type="text" id="openingHours" placeholder="Opening Hours" required value={formData.openingHours} onChange={handleInputChange} />
        <button type="submit">Add New Restaurant</button>
      </form>
    </div>
  );
};

export default AddRestaurant;