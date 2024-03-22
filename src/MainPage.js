import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="user-count">Number of Users: 0</div>
      <div className="content">
        <img src="/logo.png" alt="Tawlet Logo" className="logo" />
        <h1>Welcome to Tawlet Admin Portal</h1>
        <div className="button-container">
          <Link to="/add" className="action-button">Add a New Restaurant</Link>
          <Link to="/list" className="action-button">See All Restaurants</Link>
          <Link to="/offers" className="action-button">Offers</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
