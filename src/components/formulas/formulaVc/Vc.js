import React from 'react';
import { useState } from 'react';
import { PantallaVc, BotonVc } from './BotonVc';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


function Vc() {

    let [input, setInput] = useState(0);
    const agregarInput = val => {
        setInput(' ' + val);
    };

    return (

        <main className="holder">
            <div className='container'>
                <div className='formula-velocidadDeCorte'>
                    <h3>Formula para calcular la VELOCIDAD DE CORTE (m/min).</h3>
                    <p>Completa los compos para calcular la Velocidad de Corte (Vc) de tu herramienta</p>
                    <Form className='formulario'>
                        <Row>
                            <Col>
                                <Form.Label className='col'>Ingrese las Revoluciones por Minuto</Form.Label>
                                <Form.Control
                                    placeholder="RPM"
                                    type="number"
                                    className="mb-3 form-control validationCustom01"
                                    id="rpm"
                                    required={true}
                                />
                            </Col>
                            <Col>
                                <Form.Label className='col'>Diametro de la herramienta o pieza</Form.Label>
                                <Form.Control
                                    placeholder="milimetros"
                                    type="number"
                                    className="mb-3 form-control validationCustom01"
                                    id="diam"
                                    required={true}
                                />
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className='input-pantalla'>
                    Vc(m/min)<PantallaVc
                        input={input}
                    />
                </div>
                <BotonVc
                    className="boton"
                    manejarClic={agregarInput}
                >
                </BotonVc>
                Haz click para obtener la Velocidad de Corte
            </div>
        </main >
    );
}

export { Vc }; 