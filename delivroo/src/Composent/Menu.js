import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Menu.css"
import Logo from "../assets/Logo.jpg";

function Menu({ nombreProduits }) {
    return (
        <div className="menu">
            <div className="logo">
                <Link to="/">
                <img src={Logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
                </Link>
            </div>
            <div className="texte">
                {/*<h1 >Menu du Restaurant</h1>*/}
                <Link to="/panier"> {/* Redirige vers le composant associé à l'URL /panier */}
                    <i className="fa-solid fa-cart-plus" style={{ color: "red", paddingRight: "10px", fontSize: "25px" }}>{nombreProduits}</i>
                </Link>
            </div>
        </div>
    );
}

export default Menu;
