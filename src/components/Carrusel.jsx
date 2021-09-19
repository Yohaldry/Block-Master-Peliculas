import React, { Fragment } from "react";
import '../Styles/main.css'


import {CARRUSEL} from '../Styles/Rejistro_Styled'


const Carrusel = () => {
    return ( 
<Fragment>
<CARRUSEL>

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631343392/covers_3_rfgoth.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631343469/covers_4_blmbkh.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631343565/covers_5_zk1yvh.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</CARRUSEL>
     
</Fragment>
     );
}
 
export default Carrusel;