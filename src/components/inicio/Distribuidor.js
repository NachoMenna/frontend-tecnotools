import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../styles/components/inicio/Distribuidor.css";
import Formulario from "./Formulario";

function Distribuidor() {
  return (
    <main className="distribuidor-holder">
      <div className="container">
        <div className="contenedor-caja">
          <div className="tarjeta-distribuidor">
            <div className="estrellas">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="texto-distribuidor">
              Como importadores garantizamos las ganancias de nuestros
              distribuidores. Incentivamos de esta manera, la posibilidad de
              entrada en el mercado, compitiendo con ventaja.
            </div>
          </div>
          <div className="tarjeta-distribuidor">
            <div className="estrellas">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="texto-distribuidor">
              Con 30 años en el mercado, podemos garantizar la calidad de las
              herramientas. Las herramientas que comercializamos superaron el
              período de prueba y nuestros propios clientes las usan a diario.
            </div>
          </div>
          <div className="tarjeta-distribuidor">
            <div className="estrellas">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="texto-distribuidor">
              Desde Tecno Tools vamos a asesorarte con el objetivo de
              seleccionar la herramienta ideal según las necesidades de tus
              clientes.
            </div>
          </div>
          <div className="tarjeta-distribuidor">
            <div className="estrellas">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="texto-distribuidor">
              En nuestro local de San Francisco (Cba.) contamos con un vasto
              stock que se incrementa mes a mes.
            </div>
          </div>
        </div>
        <Formulario />
      </div>
    </main>
  );
}

export default Distribuidor;
