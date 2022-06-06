import React from 'react';
import { Vc } from '../components/formulas/formulaVc/Vc';
import { Vf } from '../components/formulas/formulaVf/Vf';
import { Rpm } from '../components/formulas/FormulaRpm/Rpm';
import '../styles/pages/Formulas.css';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function FormulasPage(props) {
    const [key, setKey] = useState('home');

    return (
        <main className="container">
            <div className='contenedor-formulas'>
                <Tabs
                    variant="pills"
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 justify-content-center"
                >
                    <Tab eventKey="home" title="Revoluciones Por Minuto (RPM)"
                    >
                        <Rpm />
                    </Tab>
                    <Tab eventKey="Vc" title="Velocidad de Corte (Vc)">
                        <Vc />
                    </Tab>
                    <Tab eventKey="Vf" title="Velocidad de Avance (Vf)">
                        <Vf />
                    </Tab>
                </Tabs>
            </div>
        </main>
    );
};
export default FormulasPage;