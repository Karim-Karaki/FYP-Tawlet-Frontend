// RestaurantInfo.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantInfo = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // Fetch the restaurant info from your backend using the id from useParams and set it to the state
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div>
      <h1>{restaurant.name}</h1>
      {/* Display other restaurant info here */}
    </div>
  );
};

export default RestaurantInfo;
