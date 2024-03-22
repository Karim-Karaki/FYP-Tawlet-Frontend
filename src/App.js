// App.js
import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage'; // Import your login page
import MainPage from './MainPage'; // Make sure to create this component
import AddRestaurant from './AddRestaurant'; // Rename your current form component
import RestaurantList from './RestaurantList'; // Component to list restaurants
import RestaurantInfo from './RestaurantInfo'; // Component to show restaurant info
import Offer from './Offer'; // Component to show offer page 


const App = () => {

  const isAuthenticated = true; // Replace with actual authentication logic

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={isAuthenticated ? <MainPage /> : <Navigate to="/" />} />
        <Route path="/add" element={<AddRestaurant />} />
        <Route path="/list" element={<RestaurantList />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/restaurant/:id" element={<RestaurantInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
