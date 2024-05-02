import Menu from  './Menu.js';
import  '../Styles/Panier.css';
import data from "../Data/data.js"
import Pizza from "../assets/Pizza.png"
import { useContext } from 'react'
import { PanierContext  } from './PanierContext.js'
import { PanierNbContext  } from './PanierContext.js'
import { sendCartData } from '../Services/apiService';

function Panier() {
   
    const { panier, setPanier } = useContext(PanierContext);
    const { nombreProduits, setNombreProduits} = useContext(PanierNbContext);

    const rajouterProduit = (nomProduit) => {
        const nouveauPanier = [...panier];
        const indexProduit = nouveauPanier.findIndex(element => element.nom === nomProduit);

        if (indexProduit !== -1) {
            
            nouveauPanier[indexProduit].nombreAjouts++;
        } else {
    
            nouveauPanier.push({ nom: nomProduit, nombreAjouts: 1 });
        }

        setPanier(nouveauPanier);
    };

    const diminuerProduit = (nomProduit) => {
        const nouveauPanier = [...panier];
        const indexProduit = nouveauPanier.findIndex(element => element.nom === nomProduit);

        if (indexProduit !== -1) {
            
            nouveauPanier[indexProduit].nombreAjouts--;
            if (nouveauPanier[indexProduit].nombreAjouts=== 0) {
                nouveauPanier.splice(indexProduit, 1);
            }

            setPanier(nouveauPanier);
            setNombreProduits(nouveauPanier.length);
        }
    };

    const envoyerPanierAuBackend = async () => {
      try {
          await sendCartData(panier); 
          alert('Votre panier a ete envoye avec succes !'); 
      } catch (error) {
          console.error('Erreur lors de lenvoi du panier:', error);
          alert('Une erreur sest produite lors de lenvoi du panier. Veuillez reessayer plus tard.'); 
      }
  };

  return(
    <>
    <Menu nombreProduits={nombreProduits} />
    <div className='PanierParagraph' style={{textAlign:"center"} }>Votre panier de commande</div>
    <div className='Panier'>
     {panier.map((element, index) => (
            <div key={index} className="customPanier">
              
              <div className="headerPanier">
              <p className="titlePanier">{element.nom}</p>
                <img src={Pizza} alt="" className="pizzaPanier" />
              </div>
              <div className="contentPanier">
                
                <p style={{color:'green'}}>{element.nombreAjouts}</p>
                <p style={{color:'red'}}>1</p>
                <button className="custom-button" onClick={() => rajouterProduit(element.nom)}>Ajouter</button>
                <button className="custom-button" onClick={() => diminuerProduit(element.nom)}>Supprimer</button>
              </div> 
            </div>
          ))}
                  

    </div>

    </>
    
    
  );
}

export default Panier;