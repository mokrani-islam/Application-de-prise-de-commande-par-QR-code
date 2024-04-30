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
            <div key={d.name} className="customPanier">
              
              <div className="headerPanier">
              <p className="titlePanier">{d.name}</p>
                <img src={Pizza} alt="" className="pizzaPanier" />
              </div>
              <div className="contentPanier">
                
                <p>quantite</p>
                <p>table</p>
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