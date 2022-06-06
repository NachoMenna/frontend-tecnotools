import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../styles/components/inicio/CarruselMarcas.css';

function NovedadesPage(props) {
    return (
        <main className='productos-holder'>
            <div className='container'>
                <Carousel className='contenedor-marcas'
                indicators={false}
                variant="dark"
                >

                    <Carousel.Item>
                        <a href='https://guehring.com/' target={'_blank'} rel="noreferrer"><img src='images/logo-guhring.png' alt='logo-guhring' id='logo-guhring'></img></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href='https://www.kyoceraprecisiontools.com/' target={'_blank'} rel="noreferrer"><img src='images/logo-kyocera.png' alt='logo-kyocera'></img></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href='https://www.asimeto.com/' target={'_blank'} rel="noreferrer"><img src='images/logo-asimeto.png' alt='logo-asimeto'></img></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href='https://www.pli-petronas.com/es-ar/industrial' target={'_blank'} rel='noreferrer'><img src='images/logo-petronas.png' alt='logo-petronas'></img></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href='http://www.ssym.com/eng/catalog/catalog_01.html' target={'_blank'} rel="noreferrer"><img src='images/logo-union.png' alt='logo-union'  height={'450px'}></img></a>
                    </Carousel.Item>
                </Carousel>
            </div>
        </main >
    );
}
export default NovedadesPage;