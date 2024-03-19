// App.js
import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage'; // Make sure to create this component
import AddRestaurant from './AddRestaurant'; // Rename your current form component
import RestaurantList from './RestaurantList'; // Component to list restaurants
import RestaurantInfo from './RestaurantInfo'; // Component to show restaurant info

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add" element={<AddRestaurant />} />
        <Route path="/list" element={<RestaurantList />} />
        <Route path="/restaurant/:id" element={<RestaurantInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
