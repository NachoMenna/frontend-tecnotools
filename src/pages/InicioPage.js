import "../styles/pages/Inicio.css";
import React from "react";
import Carrusel from "../components/inicio/Carrusel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Video from "../components/inicio/Video";
import Marcas from "../components/inicio/Marcas";
import { Link } from "react-router-dom";
// import Distribuidor from "./../components/inicio/Distribuidor";

function InicioPage(props) {
  return (
    <main className="inicio-holder">
      <Link exact to="/distribuidor">
        <Carrusel width="100%" className="carrusel" />
      </Link>
      <div className="imagen-fondo">
        <div className="container">
          <div className="contenedor-servicios">
            <div className="encabezado">
              <h2>Datos Útiles</h2>
            </div>
            <div className="servicios">
              <div className="servicio">
                <span id="icon">
                  <Link exact to="/formulas">
                    <FontAwesomeIcon icon={faCalculator} color="black" />
                  </Link>
                </span>
                <p>Calculadora</p>
              </div>
              <div className="servicio">
                <span id="icon">
                  <Link exact to="/productos">
                    <FontAwesomeIcon icon={faDownload} color="black" />
                  </Link>
                </span>
                <p>Descargas</p>
              </div>
              <div className="servicio">
                <span id="icon-img">
                  <Link exact to="/recubrimientos">
                    <img src="images/icono-fresa.png" alt="fresa" />
                  </Link>
                </span>
                <p>
                  Afilado y <br />
                  Recubrimiento
                </p>
              </div>
            </div>
          </div>
          <div className="productos">
            <div className="encabezado">
              <h2>Productos</h2>
            </div>
            <div className="catalogos-1">
              <div className="catalogo">
                <Link exact to="/productos">
                  <img
                    id="imagen-producto"
                    src="images/perforado.jpg"
                    alt="perforado"
                  />
                </Link>
                <div className="linea-catalogo"></div>
                <h5>Perforado</h5>
              </div>
              <div className="catalogo">
                <Link exact to="/productos">
                  <img
                    id="imagen-producto"
                    src="images/fresado.jpg"
                    alt="fresado"
                  />
                </Link>
                <div className="linea-catalogo"></div>
                <h5>Fresado</h5>
              </div>
              <div className="catalogo">
                <Link exact to="/productos">
                  <img
                    id="imagen-producto"
                    src="images/torneado.jpg"
                    alt="Torneado"
                  />
                </Link>
                <div className="linea-catalogo"></div>
                <h5>Torneado</h5>
              </div>
              <div className="catalogo">
                <a href="Productos.html">
                  <img
                    id="imagen-producto"
                    src="images/Roscado.jpg"
                    alt="roscado"
                  />
                </a>
                <div className="linea-catalogo"></div>
                <h5>Roscado</h5>
              </div>
            </div>
            <div className="catalogos-2">
              <div className="catalogo">
                <Link exact to="/productos.html">
                  <img
                    id="imagen-producto"
                    src="images/Soluble.jpg"
                    alt="catalogoPowermill"
                  />{" "}
                </Link>
                <div className="linea-catalogo"></div>
                <h5>Aceites industriales</h5>
              </div>
              <div className="catalogo">
                <Link exact to="/productos.html">
                  <img
                    id="imagen-producto"
                    src="images/instrumentos.jpg"
                    alt="instrumentosDeMedicion"
                  />
                </Link>
                <div className="linea-catalogo"></div>
                <h5>Instrumentos de medición</h5>
              </div>
              <Marcas />
            </div>
          </div>

          {/* <div className='contenedor-servicios'>
                              <div className='encabezado'>
                                   <h2>Datos Útiles</h2>
                              </div>
                              <div className='servicios'>
                                   <div className='servicio'>
                                        <span id='icon'><Link exact to="/formulas"><FontAwesomeIcon icon={faCalculator} color='black' /></Link></span><p>Calculadora</p>
                                   </div>
                                   <div className='servicio'>
                                        <span id='icon'><Link exact to="/productos"><FontAwesomeIcon icon={faDownload} color='black' /></Link></span><p>Descargas</p>
                                   </div>
                                   <div className='servicio'>
                                        <span id='icon-img'><Link exact to="/recubrimientos"><img src="images/icono-fresa.png" alt='fresa' /></Link></span><p>Afilado y <br />Recubrimiento</p>
                                   </div>
                              </div>
                         </div> */}
        </div>
      </div>
      <div className="video">
        <Video className="video-diver" />
      </div>
    </main>
  );
}
export default InicioPage;
