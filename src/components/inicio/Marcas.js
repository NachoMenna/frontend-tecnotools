import React from 'react';
import CarruselMarcas from '../inicio/CarruselMarcas';
import '../../styles/components/inicio/Marcas.css';

function Marcas() {
    return (
        <main className='container'>
            <div className='contenedor-escritorio'>
                <div className='marca-guhring'>
                    <a href='https://guehring.com/' target={'_blank'} rel="noreferrer"><img src='images/logo-guhring.png' alt='logo-guhring' id='logo-guhring'></img></a>
                </div>
                <div className='marca-kyocera'>
                    <a href='https://www.kyoceraprecisiontools.com/' target={'_blank'} rel="noreferrer"><img src='images/logo-kyocera.png' alt='logo-kyocera'></img></a>
                </div>
                <div className='marca-asimeto'>
                    <a href='https://www.asimeto.com/' target={'_blank'} rel="noreferrer"><img src='images/logo-asimeto.png' alt='logo-asimeto'></img></a>
                </div>
                <div className='marca-petronas'>
                    <a href='https://www.pli-petronas.com/es-ar/industrial' target={'_blank'} rel="noreferrer"><img src='images/logo-petronas.png' alt='logo-petronas'></img></a>
                </div>
                <div className='marca-union'>
                    <a href='http://www.ssym.com/eng/catalog/catalog_01.html' target={'_blank'} rel="noreferrer"><img src='images/logo-union.png' alt='logo-union'  height={'450px'}></img></a>
                </div>
            </div>

            <div className='contenedor-mobil'>
                <CarruselMarcas />
            </div>

        </main>

    )
}

export default Marcas;