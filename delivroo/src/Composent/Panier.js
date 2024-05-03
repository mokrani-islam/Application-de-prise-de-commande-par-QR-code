import Menu from  './Menu.js';
import  '../Styles/Panier.css';
import data from "../Data/data.js"
import Pizza from "../assets/Pizza.png"
import { useContext } from 'react'
import { PanierContext  } from './PanierContext.js'
import { PanierNbContext  } from './PanierContext.js'
import { sendCartData } from '../Services/apiService';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Panier() {
  const navigate = useNavigate();
    const { panier, setPanier } = useContext(PanierContext);
    const { nombreProduits, setNombreProduits} = useContext(PanierNbContext);
    const [inputValue, setInputValue] = useState('')
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
   
  const showSwal = () => {
    withReactContent(Swal).fire({
      
       icon: "success",
       title: "Commande Validé",
       showConfirmButton: false,
       timer: 1200
      }).then(() => {
        // Réinitialiser le panier et le nombre de produits
        setPanier([]);
        setNombreProduits(0);
        // Rediriger vers l'accueil
        navigate("/");
      });
    };
    
    return(
      <>

{panier.length === 0 ? (
         <>
        <Menu nombreProduits={nombreProduits} />
        <div className='PanierParagraph' style={{textAlign:"center" ,marginTop: "10%"} }>Votre panier de commandes est vide</div>
        <p style={{textAlign:"center"} }> Vous n'avez pas encore pris commande</p>
        </>
      ) : (
        <>
        <Menu nombreProduits={nombreProduits} />
        <div className='PanierParagraph' style={{textAlign:"center" ,marginTop: "10%"} }>Votre panier de commandes</div>
        <div className='Panier'  >
         {panier.map((element, index) => (
                <div key={index} className="customPanier">
                  
                  <div className="headerPanier">
                  <p className="titlePanier">{element.nom}</p>
                    <img src={Pizza} alt="" className="pizzaPanier" />
                  </div>
                  <div className="contentPanier">
                    
                    <p style={{color:'green'}}>{element.nombreAjouts}</p>
                    <p style={{color:'red'}}>1</p>
                    <Button  variant="primary" size="lg" active onClick={() => rajouterProduit(element.nom)}>Ajouter</Button>
                    <Button  variant="danger" size="lg" active  onClick={() => diminuerProduit(element.nom)}>Diminuer</Button>
                  {/*  <button className="custom-button" onClick={() => rajouterProduit(element.nom)}>Ajouter</button>*/}
                  {/*  <button className="custom-button" onClick={() => diminuerProduit(element.nom)}>Supprimer</button>*/}
                  </div> 
                </div>
              ))}
                       <div class="center">
                       <Button  variant="success"  style ={{textAlign:"center"}} onClick={showSwal}>Valider</Button>
                      {/*  <button onClick={showSwal} style ={{textAlign:"center"}}>Valider</button>*/}
                       </div>   
                       
                      
        </div>
        </>
      )}
      
  
      
  
      </>
      
      
    );



}

export default Panier;