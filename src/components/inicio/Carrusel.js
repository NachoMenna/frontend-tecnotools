import '../../styles/components/inicio/Carrusel.css';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';


function Carrusel(props) {
  return (
    <div className='carruselPadre'>
      <Carousel
      variant='dark'
      >
        <Carousel.Item>
          <div className='Imagen1'>
            <img src="images/MesaDeTrabajo 1-100.jpg" alt="imagen1" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='Imagen2'>
            <img src="images/BannerHNMG-100.jpg" alt="imagen2" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='Imagen3'>
            <img src="images/BannerWNMU-100.jpg" alt="imagen3" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Carrusel;