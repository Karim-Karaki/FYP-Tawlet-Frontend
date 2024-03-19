// AddRestaurant.js
import React from 'react';

const AddRestaurant = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission, like sending data to the backend
  };

  return (
    <div className="container">
      <h1>Add New Restaurant</h1>
      <form id="addRestaurantForm" onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Name" required />
        <input type="text" id="location" placeholder="Location" required />
        <input type="text" id="cuisine" placeholder="Cuisine (comma-separated)" required />
        <input type="text" id="menu" placeholder="Menu URL" required />
        <input type="text" id="openingHours" placeholder="Opening Hours" required />
        <button type="submit">Add New Restaurant</button>
      </form>
    </div>
  );
};

export default AddRestaurant;
