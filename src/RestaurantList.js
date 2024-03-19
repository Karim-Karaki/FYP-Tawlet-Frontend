// RestaurantList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch the list of restaurants from your backend and set it to the state
  }, []);

  return (
    <div>
      <h1>All Restaurants</h1>
      <ul>
        {restaurants.sort(/* sort function here */).map(restaurant => (
          <li key={restaurant.id}>
            <Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
