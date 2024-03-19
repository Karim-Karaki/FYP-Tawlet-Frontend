import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="main-container">
    <img src="/logo.png" alt="Tawlet Logo" className="logo" />
      <h1>Welcome to Tawlet Admin Portal</h1>
      <Link to="/add" className="action-button">Add a New Restaurant</Link>
      <Link to="/list" className="action-button">See All Restaurants</Link>
    </div>
  );
};

export default MainPage;
