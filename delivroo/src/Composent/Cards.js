// Dans le composant Cards.js
import React, { useState } from "react";
import "../Styles/Cards.css"
import Pizza from "../assets/Pizza.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "../Data/data.js"

function Cards({ updateNumberOfProducts }) {
  const [panier, setPanier] = useState([]);
  const [nombreProduits, setNombreProduits] = useState(0);

  const ajouterAuPanier = (nom, photo) => {
    const produitExistant = panier.find((item) => item.nom === nom);

    if (produitExistant) {
      const nouveauPanier = panier.map((item) =>
        item.nom === nom ? { ...item, nombreAjouts: item.nombreAjouts + 1 } : item
      );
      setPanier(nouveauPanier);
    } else {
      setPanier([...panier, { nom, photo, nombreAjouts: 1 }]);
      setNombreProduits(nombreProduits + 1);
      updateNumberOfProducts(nombreProduits + 1); // Mettre à jour le nombre de produits dans le Menu
    }
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="custom-container">
      <div className="custom-margin-top">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="custom-card">
              <div className="header">
                <img src={Pizza} alt="" className="pizza-image" />
              </div>
              <div className="content">
                <p className="title">{d.name}</p>
                <p>{d.review}</p>
                <button className="custom-button" onClick={() => ajouterAuPanier(d.name, {Pizza})}>Ajouter</button>
              </div> 
            </div>
          ))}
        </Slider>
      </div>
      {/* Affichage des éléments ajoutés au panier */}
      <div className="panier">
        <h2>Produits ajoutés au panier :</h2>
        <ul>
          {panier.map((item, index) => (
            <li key={index}>
              <img src={item.photo} alt={item.nom} />
              <span>{item.nom}</span>
              <span>Nombre d'ajouts : {item.nombreAjouts}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



export default Cards;