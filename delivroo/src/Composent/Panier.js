import React, { useState } from 'react';
import Menu from  './Menu.js';
import  '../Styles/Panier.css';
import data from "../Data/data.js"
import Pizza from "../assets/Pizza.png"

function Panier() {
  return(
    <>
    <Menu />

    <div className='PanierParagraph' style={{textAlign:"center"} }>Votre panier de commande</div>
    <div className='Panier'>
     
    {data.map((d) => (
            <div key={d.name} className="custom-card">
              <div className="header">
                <img src={Pizza} alt="" className="pizza-image" />
              </div>
              <div className="content">
                <p className="title">{d.name}</p>
                <p>{d.review}</p>
                <button className="custom-button" >Ajouter</button>
                <button className="custom-button" >Supprimer</button>
              </div> 
            </div>
          ))}
                  

    </div>

    </>
    
    
  );
}

export default Panier;