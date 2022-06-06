import React from 'react';
import Catalogo from '../productos/Catalogo';
import Carousel from 'react-bootstrap/Carousel';
import '../../styles/components/productos/CarruselCatalogos.css';

function NovedadesPage(props) {
    return (
        <main className='productos-holder'>
            <div className='container'>
                <h2>Fresado</h2>
                <Carousel className='contenedor-fresado'
                    variant='dark'

                >
                    <Carousel.Item>
                        <Catalogo
                            imagenCatalogo='powermill'
                            archivo='catalogo-powermill'
                            pieImagen='Línea Powermill'
                            marca='GUHRING'
                            alt="First slide"
                            className="d-block w-100"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Catalogo
                            imagenCatalogo='hnmg'
                            archivo='catalogo-hnmg'
                            pieImagen='Planeado con ins. HNMG'
                            marca='Tecno Tools'
                            className="d-block w-100"
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Catalogo
                            imagenCatalogo='wnmu'
                            archivo='catalogo-wnmu'
                            pieImagen='Escuadrado 90° con ins. WNMU'
                            marca='Tecno Tools'
                            alt="Third slide"
                            className="d-block w-100"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Catalogo
                            imagenCatalogo='diver'
                            archivo='catalogo-diver'
                            pieImagen='Fresado de alto rendimiento DIVER'
                            marca='GUHRING'
                            alt="Fourd slide"
                            className="d-block w-100"
                        />

                    </Carousel.Item>
                </Carousel>
                <h2>Roscado</h2>
                <Carousel className='contenedor-roscado'
                    variant='dark'

                >
                    <Carousel.Item>
                        <Catalogo
                            imagenCatalogo='powertap'
                            archivo=''
                            pieImagen='Línea Powertap'
                            marca='GUHRING'
                            alt="First slide"
                            className="d-block w-100"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Catalogo
                            imagenCatalogo='inserto-roscado'
                            archivo='catalogo-inserto-roscado'
                            pieImagen='Insertos de roscado'
                            marca='Apple'
                            alt="First slide"
                            className="d-block w-100"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Catalogo
                            imagenCatalogo='roscado-laminado'
                            archivo='catalogo-roscado-laminado'
                            pieImagen='Roscado por Laminación'
                            marca='GUHRING'
                            alt="First slide"
                            className="d-block w-100"
                        />
                    </Carousel.Item>
                </Carousel>
                <h2>Perforado</h2>
                <Carousel className='contenedor-roscado'
                    variant='dark'

                >
                    <Carousel.Item>
                        <Catalogo
                            imagenCatalogo='broca-spmg'
                            archivo='catalogo-broca-spmg'
                            pieImagen='Broca con inserto SPMG'
                            marca='Tecno Tools'
                            alt="First slide"
                            className="d-block w-100"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Catalogo
                            imagenCatalogo='perforado-superline'
                            archivo='catalogo-perforado-superline'
                            pieImagen='Línea Superline'
                            marca='GUHRING'
                            alt="First slide"
                            className="d-block w-100"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Catalogo
                            imagenCatalogo='powerline'
                            archivo='catalogo-powerline'
                            pieImagen='Línea Powerline'
                            marca='GUHRING'
                            alt="First slide"
                            className="d-block w-100"
                        />
                    </Carousel.Item>
                </Carousel>

                <h2>Torneado</h2>
                <Carousel className='contenedor-roscado'
                    variant='dark'

                >
                    <Carousel.Item>
                        <Catalogo
                            imagenCatalogo='grooving-tools'
                            archivo='catalogo-grooving-tools'
                            pieImagen='Línea Grooving Tools'
                            marca='GUHRING'
                            alt="First slide"
                            className="d-block w-100"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Catalogo
                            imagenCatalogo='torneado-uko'
                            archivo='catalogo-torneado-uko'
                            pieImagen='Torneado'
                            marca='UKO'
                            alt="First slide"
                            className="d-block w-100"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Catalogo
                            imagenCatalogo='torneado-kyocera'
                            archivo='catalogo-torneado-kyocera'
                            pieImagen='Torneado general'
                            marca='KYOCERA'
                            alt="First slide"
                            className="d-block w-100"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Catalogo
                            imagenCatalogo='torneado-union'
                            archivo='catalogo-torneado-union'
                            pieImagen='Torneado Ceramico'
                            marca='UNION'
                            alt="First slide"
                            className="d-block w-100"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </main >
    );
}
export default NovedadesPage;