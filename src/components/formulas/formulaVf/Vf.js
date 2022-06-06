import React from 'react';
import { useState } from 'react';
import { PantallaVf, BotonVf } from './BotonVf';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


function Vf() {

    let [input, setInput] = useState(0);
    const agregarInput = val => {
        setInput(' ' + val);
    };

    return (

        <main className="holder">

            <div className='container'>

                <div className='formula-avance'>

                    <h3>Formula para calcular la VELOCIDAD DE AVANCE (mm/min).</h3>

                    <p>Completa los compos para calcular la Velocidad de Avance (Vf) de tu herramienta</p>

                    <Form className='formulario'>
                        <Row>
                            <Col>
                                <Form.Label className='col1'>Ingrese las Revoluciones por Minuto</Form.Label>
                                <Form.Control
                                    placeholder="RPM"
                                    type="number"
                                    className="mb-3 form-control validationCustom01"
                                    id="rpmAvance"
                                    required={true}
                                />
                            </Col>
                            <Col>
                                <Form.Label className='col1'>Ingrese el avance Fz</Form.Label>
                                <Form.Control
                                    placeholder="milimetros/revolucion"
                                    type="number"
                                    className="mb-3 form-control validationCustom01"
                                    id="avanceF"
                                    required={true}
                                />
                            </Col>
                            <Col>
                                <Form.Label className='col1'>Ingrese la cantidad de filos</Form.Label>
                                <Form.Control
                                    placeholder="dientes (z)"
                                    type="number"
                                    className="mb-3 form-control validationCustom02"
                                    id="dientesZ"
                                    required={true}
                                />
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className='input-pantalla'>
                    Vf(mm/min) <PantallaVf
                        input={input}
                    />
                </div>
                <BotonVf
                    manejarClic={agregarInput}
                >
                </BotonVf>
                Haz click para obtener la Velocidad de Avance
            </div>
        </main >
    );
}

export { Vf }; 