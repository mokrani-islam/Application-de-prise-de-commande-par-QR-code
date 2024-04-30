import React from 'react'
import Dishes from './Dishes'
import Cards from  './Cards.js'
import Menu from  './Menu.js'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';


export default function MainPage() {
const [nombreProduits, setNombreProduits] = useState(0); // État pour le nombre de produits

    // Fonction pour mettre à jour le nombre de produits
const updateNumberOfProducts = (newValue) => {
setNombreProduits(newValue);

    };    
  return (
    <>
    <Menu nombreProduits={nombreProduits} />
    <Dishes />
    <Cards updateNumberOfProducts={updateNumberOfProducts} />
  </>
  )
}





