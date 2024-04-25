import Pizza from "../assets/Pizza.png"
import "../Styles/Dishes.css"
function Dishes() {
    return (
      <div className="Container">
         <div className="Description">
         <span>Tout est</span> <br />
      <span>meilleur avec</span> <br />
      <span>une <span style={{ color: 'red' }}>pizza</span></span>
      <p> Faites votre commande en 3 trois clics dans votre restaurant préféré
      </p>

      <div className="container">
      <button className="bouton">Prendre commande</button>
      
      <button className="bouton">Plus d'information</button>
      </div>
      
      

        </div>
        <div className="paragraph"> 
        <p>Valider Votre commande</p>
        <p style={{ color: 'red' , font: 'bold'}}> Menu</p>
        </div>

        <div className="logoPizza">
          <img src={Pizza} alt="Logo" style={{ width: '300px', height: '300px' }} />
        </div>
       
      </div>
    );
  }
export default Dishes;