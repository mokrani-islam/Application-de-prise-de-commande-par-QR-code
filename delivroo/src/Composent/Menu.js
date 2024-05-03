import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Menu.css"
import Logo from "../assets/pizza-pizza.svg";

function Menu({ nombreProduits }) {
    const panierData = { momo:'1'};
    return (
        <div className="menu">
            <div className="logo">
                <Link to="/">
                <img src={Logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
                </Link>
            </div>
            <div className="texte">
                {/*<h1 >Menu du Restaurant</h1>*/}
                <Link to={{ pathname: "/panier", state: { panierData } }}> {/* Redirige vers le composant associé à l'URL /panier */}
                    <i className="fa-solid fa-cart-plus" style={{ color: "#C9322D", paddingRight: "10px", fontSize: "25px" }}>{nombreProduits}</i>
                </Link>
            </div>
        </div>
    );
}

export default Menu;
