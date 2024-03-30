// RestaurantInfo.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RestaurantInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null); // Define error state

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

  const handleEdit = () => {
    navigate(`/edit/${restaurant._id}`, { state: { initialFormData: restaurant } });
  };


  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this restaurant?")) {
      try {
        const response = await fetch(`http://localhost:5000/restaurants/${restaurant._id}`, {
          method: 'DELETE', // or the appropriate method for deletion
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        // Show the success message before navigation
        alert('Restaurant was successfully deleted');
  
        // Assuming the route to the restaurant list is '/restaurants', use this
        navigate('/list'); // Change to the correct path if necessary
  
      } catch (error) {
        console.error("There was a problem deleting the restaurant data:", error);
        // Handle the error, maybe show a different message
        alert('There was a problem deleting the restaurant.');
      }
    }
  };
  

return (
  <div className="main-container">
    <div className="restaurant-info-container">
      <h1>{restaurant.name}</h1>
      <p><strong>ID:</strong> {restaurant._id}</p>
      <p><strong>Location:</strong> {restaurant.location}</p>
      <p><strong>Type:</strong> {restaurant.sortieType}</p>
      <p><strong>Cuisines:</strong> {restaurant.cuisine.join(', ')}</p>
      <p><strong>Opening Hours:</strong> {restaurant.openingHours}</p>
      <p><strong>Menu URL:</strong> <a href={restaurant.menu} target="_blank" rel="noopener noreferrer">View Menu</a></p>
      <div className="button-container">
        <button onClick={handleEdit} className="action-button">Edit Info</button>
        <button onClick={handleDelete} className="action-button">Delete Restaurant</button>
        
      </div>
    </div>
  </div>
);
};


export default RestaurantInfo;
