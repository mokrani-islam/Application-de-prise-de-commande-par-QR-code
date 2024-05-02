import React, { createContext, useState, useContext } from 'react';
import data from "../Data/data.js"
export const PanierContext = createContext(); // Exportez le contexte lui-même

export const PanierProvider = ({ children }) => {
    const [panier, setPanier] = useState([]);

    return (
        <PanierContext.Provider value={{ panier, setPanier }}>
            {children}
        </PanierContext.Provider>
    );
};



export const PanierNbContext = createContext();
export const PanierNbProvider = ({ children }) => {
    const [nombreProduits, setNombreProduits] = useState(0);

    return (
        <PanierNbContext.Provider value={{ nombreProduits, setNombreProduits }}>
            {children}
        </PanierNbContext.Provider>
    );
};