// RestaurantList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:5000/restaurants');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data); // Log to see what's coming back
        const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
        setRestaurants(sortedData);
      } catch (error) {
        console.error("There was a problem fetching the restaurant data:", error);
      }
    };
    
    fetchRestaurants();
  }, []);
  
  const filteredRestaurants = searchTerm
    ? restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : restaurants;

  return (
    <div className="restaurantcard-container">
      <h1>All Restaurants </h1>
      <input
        type="text"
        placeholder="Search restaurants..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="restaurant-grid">
        {filteredRestaurants.map(restaurant => (
          <div key={restaurant._id} className="restaurant-card">
            <Link to={`/restaurant/${restaurant._id}`}>{restaurant.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;