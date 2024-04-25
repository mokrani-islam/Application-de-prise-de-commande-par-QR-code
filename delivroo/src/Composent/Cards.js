import "../Styles/Cards.css"

import Pizza from "../assets/Pizza.png"


function Cards(){

return(
<div className="custom-container">
  <div className="custom-margin-top">
  
      {data.map((d) => (
        <div key={d.name} className="custom-card">
          <div className="header">
            <img src={Pizza} alt="" className="pizza-image" />
          </div>
          <div className="content">
            <p className="title">{d.name}</p>
            <p>{d.review}</p>
            <button className="custom-button">Ajouter</button>
          </div>
        </div>
      ))}
  </div>
</div>);








}

const data =[
{
name : 'Sicilienne',
img :'../assets/Logo1.jpg',
review:'Sauce+Fromage+Anchois+Olive'

},
{
    name : 'Margarita',
    img :'../assets/Logo.jpg',
    review:'Sauce+Fromage+Olive'

},
{
    name : 'Napolitane',
    img :'../assets/Pizza.png',
    review:'Sauce+Fromage+Thon+Olive'

}














]


export default Cards;