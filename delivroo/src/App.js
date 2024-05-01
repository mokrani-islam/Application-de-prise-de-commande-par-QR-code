import Menu from './Composent/Menu'
import Dishes from './Composent/Dishes'
import Cards from  './Composent/Cards.js'
import { useState } from 'react'
import AppRoutes from  './Route/AppRoutes.js'
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [nombreProduits, setNombreProduits] = useState(0); // État pour le nombre de produits

  // Fonction pour mettre à jour le nombre de produits
  const updateNumberOfProducts = (newValue) => {
    setNombreProduits(newValue);
  };

  
      return (
      
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      );
  
}
  


export default App;
