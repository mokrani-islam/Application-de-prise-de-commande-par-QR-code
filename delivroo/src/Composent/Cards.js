import "../Styles/Cards.css"
import Pizza from "../assets/Pizza.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Cards(){
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
return(
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
            <button className="custom-button">Ajouter</button>
          </div>
        </div>
      ))}
      </Slider>
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

},
{
  name : 'Napolitane',
  img :'../assets/Pizza.png',
  review:'Sauce+Fromage+Thon+Olive'

},
{
  name : 'Napolitane',
  img :'../assets/Pizza.png',
  review:'Sauce+Fromage+Thon+Olive'

},{
  name : 'Napolitane',
  img :'../assets/Pizza.png',
  review:'Sauce+Fromage+Thon+Olive'

},{
  name : 'Napolitane',
  img :'../assets/Pizza.png',
  review:'Sauce+Fromage+Thon+Olive'

}














]


export default Cards;