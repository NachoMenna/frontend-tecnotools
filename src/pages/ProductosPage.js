import '../styles/pages/Productos.css';
import React from 'react';
import CarruselCatalogos from '../components/productos/CarruselCatalogos'
import Catalogo from '../components/productos/Catalogo';

function NovedadesPage(props) {
    return (
        <main className='productos-holder'>
            <div className='container'>
                <div className='productos-escritorio'>
                    <h2>Fresado</h2>
                    <div className='contenedor-fresado'>
                        <Catalogo
                            imagenCatalogo='powermill'
                            archivo='catalogo-powermill'
                            pieImagen='Línea Powermill'
                            marca='GUHRING'
                            alt="First slide"
                            className="d-block w-100"
                        />
                        <Catalogo
                            imagenCatalogo='hnmg'
                            archivo='catalogo-hnmg'
                            pieImagen='Planeado 45° - HNMG'
                            marca='TECNO TOOLS'
                            className="d-block w-100"
                            alt="Second slide"
                        />
                        <Catalogo
                            imagenCatalogo='wnmu'
                            archivo='catalogo-wnmu'
                            pieImagen='Escuadrado 90°- WNMU'
                            marca='TECNO TOOLS'
                            alt="Third slide"
                            className="d-block w-100"
                        />
                        <Catalogo
                            imagenCatalogo='diver'
                            archivo='catalogo-diver'
                            pieImagen='Línea Diver'
                            marca='GUHRING'
                            alt="Fourd slide"
                            className="d-block w-100"
                        />
                    </div>
                    <h2>Roscado</h2>
                    <div className='contenedor-roscado'>
                        <Catalogo
                            imagenCatalogo='powertap'
                            archivo=''
                            pieImagen='Línea Powertap'
                            marca='GUHRING'
                        />
                        <Catalogo
                            imagenCatalogo='inserto-roscado'
                            archivo='catalogo-inserto-roscado'
                            pieImagen='Insertos de roscado'
                            marca='Apple'
                        />
                        <Catalogo
                            imagenCatalogo='roscado-laminado'
                            archivo='catalogo-roscado-laminado'
                            pieImagen='Roscado por Laminación'
                            marca='GUHRING'
                        />
                    </div>
                    <h2>Perforado</h2>
                    <div className='contenedor-perforado'>
                        <Catalogo
                            imagenCatalogo='broca-spmg'
                            archivo='catalogo-broca-spmg'
                            pieImagen='Broca con inserto SPMG'
                            marca='Tecno Tools'
                        />
                        <Catalogo
                            imagenCatalogo='perforado-superline'
                            archivo='catalogo-perforado-superline'
                            pieImagen='Línea Superline'
                            marca='GUHRING'
                        />
                        <Catalogo
                            imagenCatalogo='powerline'
                            archivo='catalogo-powerline'
                            pieImagen='Línea Powerline'
                            marca='GUHRING'
                        />
                    </div>
                    <h2>Torneado</h2>
                    <div className='contenedor-torneado'>
                        <Catalogo
                            imagenCatalogo='grooving-tools'
                            archivo='catalogo-grooving-tools'
                            pieImagen='Línea Grooving Tools'
                            marca='GUHRING'
                        />
                        <Catalogo
                            imagenCatalogo='torneado-uko'
                            archivo='catalogo-torneado-uko'
                            pieImagen='Torneado'
                            marca='UKO'
                        />
                        <Catalogo
                            imagenCatalogo='torneado-union'
                            archivo='catalogo-torneado-union'
                            pieImagen='Torneado Ceramico'
                            marca='UNION'
                        />
                        <Catalogo
                            imagenCatalogo='torneado-kyocera'
                            archivo='catalogo-torneado-kyocera'
                            pieImagen='Torneado general'
                            marca='KYOCERA'
                        />
                    </div>
                </div>

                <div className='productos-mobil'>
                    <CarruselCatalogos />
                </div>

            </div>
        </main >
    );
}
export default NovedadesPage;