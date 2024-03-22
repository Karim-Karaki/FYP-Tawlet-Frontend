// RestaurantInfo.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantInfo = () => {
  const { id } = useParams(); // This should match the URL param name you have set in your route
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurantInfo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/restaurants/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRestaurant(data);
      } catch (error) {
        setError(error.message);
        console.error("There was a problem fetching the restaurant data:", error);
      }
    };

    fetchRestaurantInfo();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p><strong>ID:</strong> {restaurant._id}</p>
      <p><strong>Portal Username:</strong> {restaurant.portalUsername}</p>
      {/* It's not recommended to display the password! */}
      <p><strong>Password:</strong> {restaurant.password}</p>
      <p><strong>Location:</strong> {restaurant.location}</p>
      <p><strong>Type:</strong> {restaurant.sortieType}</p>
      <p><strong>Cuisines:</strong> {restaurant.cuisine.join(', ')}</p>
      <p><strong>Opening Hours:</strong> {restaurant.openingHours}</p>
      <p><strong>Menu URL:</strong> <a href={restaurant.menu} target="_blank" rel="noopener noreferrer">View Menu</a></p>
      {/* Include any other information you might want to display */}
    </div>
  );
};


export default RestaurantInfo;
