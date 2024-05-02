import React from 'react'
import Dishes from './Dishes'
import Cards from  './Cards.js'
import Menu from  './Menu.js'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { PanierNbContext  } from './PanierContext.js'
import { useContext } from 'react'
export default function MainPage() {
const { nombreProduits, setNombreProduits} = useContext(PanierNbContext); 
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





