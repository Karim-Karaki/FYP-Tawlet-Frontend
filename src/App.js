// App.js
import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage'; // Import your login page
import MainPage from './MainPage'; // Make sure to create this component
import AddRestaurant from './AddRestaurant'; // Rename your current form component
import RestaurantList from './RestaurantList'; // Component to list restaurants
import RestaurantInfo from './RestaurantInfo'; // Component to show restaurant info


const App = () => {

  const isAuthenticated = true; // Replace with actual authentication logic

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={isAuthenticated ? <MainPage /> : <Navigate to="/" />} />
        <Route path="/add" element={<AddRestaurant />} />
        <Route path="/edit/:id" element={<AddRestaurant editMode={true} />} />
        <Route path="/list" element={<RestaurantList />} />
        <Route path="/restaurant/:id" element={<RestaurantInfo />} />
        {/* Other routes remain the same */}
      </Routes>
    </Router>
  );
};

export default App;
