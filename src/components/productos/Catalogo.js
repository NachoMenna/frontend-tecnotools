import React from 'react';
import '../../styles/components/productos/Catalogo.css';


function Catalogo(props) {
    return (
        <main className='container'>
            <div className='contenedor'>
                <div className='catalogo1'>
                    <a href={(`images/${props.archivo}.pdf`)} target={'_blank'} rel="noreferrer"> <img src={(`images/catalogo-${props.imagenCatalogo}.jpg`)}
                        alt='imagen-catalogo' />
                    </a>
                    <p className='pie-imagen-catalogo'>{props.pieImagen}</p>
                    <p className='marca-catalogo'>{props.marca}</p>
                </div>
            </div>
        </main>
    )
}
export default Catalogo;