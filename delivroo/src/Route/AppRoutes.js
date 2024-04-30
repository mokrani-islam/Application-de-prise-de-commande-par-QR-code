import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Panier from '../Composent/Panier.js';
import MainPage from '../Composent/MainPage.js';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/panier" element={<Panier />}   />
    </Routes>
  );
}

export default AppRoutes;
