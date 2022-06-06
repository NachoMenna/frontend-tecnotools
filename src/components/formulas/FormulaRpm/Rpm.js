import React from 'react';
import { useState } from 'react';
import { PantallaRpm, BotonRpm } from './BotonRpm';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


function Rpm() {
    let [input, setInput] = useState(0);
    const agregarInput = val => {
        setInput(' ' + val);
    };
    return (
        <main className="holder">
            <div className='container'>
                <div className='formula-rpm'>
                    <h3>Formula para calcular las REVOLUCIONES POR MINUTO (RPM).</h3>
                    <p>Completa los compos para calcular las RPM de tu herramienta</p>
                    <Form className="formulario">
                        <Row>
                            <Col>
                                <Form.Label className="col">Ingrese el diametro (mm)</Form.Label>
                                <Form.Control placeholder="milimetros"
                                    type="number"
                                    className="mb-2 form-control validationCustom01"
                                    id="diametro"
                                    required={true}
                                />
                            </Col>
                            <Col>
                                <Form.Label className="col">Ingrese la Velocidad de Corte (Vc)</Form.Label>
                                <Form.Control
                                    placeholder="metros/minutos"
                                    type="number"
                                    className="mb-2 form-control validationCustom01"
                                    id="vc"
                                    required={true}
                                />
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className='input-pantalla'>
                    RPM<PantallaRpm
                        input={input}
                    />
                </div>
                <BotonRpm
                    className="boton"
                    manejarClic={agregarInput}
                >
                </BotonRpm>
                Haz click para obtener las RPM
            </div>
        </main >
    );
}

export { Rpm }; 