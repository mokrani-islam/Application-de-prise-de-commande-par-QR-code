import  "../Styles/Menu.css"
import Logo from "../assets/Logo.jpg"

function Menu() {
    return (
      <div className="menu">
        <div className="logo">
          <img src={Logo} alt="Logo" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="texte">
          <h1 >Menu du Restaurant</h1>
        </div>
      </div>
    );
  }
  

export default Menu;