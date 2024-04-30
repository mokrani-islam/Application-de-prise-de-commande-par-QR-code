import React, { useState } from 'react';
import Menu from  './Menu.js';
import  '../Styles/Panier.css';

function Panier() {
  return(
    <>
    <Menu />

    <div className='PanierParagraph' style={{textAlign:"center"} }>Votre panier de commande</div>
    <div className='Panier'>

    </div>

    </>
    
    
  );
}

export default Panier;