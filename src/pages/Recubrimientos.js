import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import '../styles/components/inicio/recubrimientos.css';

function Recubrimientos(props) {
    return (
        <main className="container">
            <div className='contenedor-recubrimientos'>                
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={2} className="col" >
                            <Nav variant="pills" className="flex">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className='item-link'>Información General</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="hyperlox" className='item-link'>Hyperloxs</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="hyperlox-blue" className='item-link'>Hyperlox Blue</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tinalox-SN2" className='item-link'>Tinalox  SN2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="SuperTiN" className='item-link'>SuperTiN</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="AluSpeed" className='item-link'>AluSpeed</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="SuperCrN" className='item-link'>SuperCrN</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="HSN2" className='item-link'>HSN2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='contenido'>
                                <Tab.Pane eventKey="first">
                                    <h4>Servicio de Afilado</h4>
                                    Podemos afilar tanto herramientas de Acero Rápido como de Meta Duro Integral. Y las herramientas con posibilidad de afilado son: Fresas, mechas y creadores para engranajes.

                                    <h6>Afilado convencional</h6>
                                    Contamos con la posibilidad de alargar la vida útil tus herramientas y al precio más bajo. Con especialistas en el afilado con más de 15 años trabajando con máquinas convencionales.

                                    <h6>Afilado CNC</h6>
                                    Recomendamos el afilado con máquinas CNC para reducir los costos de tu mecanizado logrando el balance óptimo en las condiciones de corte de la herramienta minimizando los riegos. Dicho afilado, combinado con un óptimo recubrimiento y la herramienta adecuada, podemos utilizarlas en mecanizado de alta velocidad (HSC) o alto avance (HPC).

                                    <h5>A continuación adjuntamos un detalle con todos los recubrimientos disponibles:</h5>

                                    <img src='images/tabla-resumen-recubrimientos.jpg' alt='imagen-recubrimientos' width="100%" />
                                </Tab.Pane>
                                <Tab.Pane eventKey="hyperlox">
                                    <h4>Hyperlox  recubrimiento PVD basado en AlTiN</h4>
                                    Hyperlox  es un recubrimiento PVD basado en compuestos AlTiN consiguiendo la proporción de Ti y Al óptima para conseguir la mejores propiedades de dureza y tenacidad. Estructura de cristales extremadamente finos que obtienen capas con tensiones internas muy bajas con durezas muy elevadas.   Hyperlox está especialmente recomendado en herramientas de corte que precisen elevada resistencia al desgaste y elevada resistencia a la oxidación trabajando en seco y en condiciones muy extremas.

                                    <h6>Beneficios que aporta el recubrimiento Hyperlox</h6>
                                    Muy elevada dureza y resistencia al desgaste.
                                    Relación dureza-tenacidad excelente proporcionada por la estructura de supernitruro.
                                    Hyperlox Plus. La estructura obtenida por Hyperlox permite mayores espesores manteniendo las características de adherencia y tenacidad.
                                    Evita las microsoldaduras en frío y en caliente.
                                    Excelente acabado superficial que minimiza los esfuerzos de corte y  la fricción en los canales de evacuación de viruta.
                                    Temperatura de oxidación más elevada que Tinalox SN2.
                                    Hyperlox Blue. Hyperlox puede obtenerse  una coloración azul característica que permite un mejor seguimiento del desgaste de la herramienta.


                                    <h6>Características Técnicas</h6>


                                    Dureza	37GPa (3500HV)
                                    Coeficiente de fricción	0.3-0.5
                                    Adherencia	Excelente
                                    Espesor de capa	2-3 µm (4-6 µm Hyperlox plus)
                                    Color	Negro violeta
                                    Temperatura de obtención	450-500ºC
                                    Temperatura de degradación (oxidación)	1200ºC


                                    <h6>Aplicaciones de éxito</h6>
                                    Placas de fresado y ranurado.
                                    Fresas, escariadores de acero rápido y metal duro.
                                    Fresas de acabado y copiado.
                                    Fresas Madre.
                                    Brocas cañón, brocas de gran longitud.
                                    Sierras de disco.
                                    Cuchillas de corte
                                    Mecanizado de aceros inoxidables.
                                    Mecanizado de aceros templados a 55 HRC y 62 HRC.
                                    Mecanizado de las aleaciones de titanio, en especial TiAL6V4
                                    Posibilidad de eliminación de recubrimiento y recubrir de nuevo.
                                </Tab.Pane>
                                <Tab.Pane eventKey="hyperlox-blue">
                                    <h4>Hyperlox  Blue recubrimiento PVD basado en AlTiN</h4>
                                    Hyperlox Blue  es un recubrimiento PVD basado en compuestos AlTiN consiguiendo la proporción de Ti y Al óptima para conseguir la mejores propiedades de dureza y tenacidad. Estructura de cristales extremadamente finos que obtienen capas con tensiones internas muy bajas con durezas muy elevadas. Su acabado azul hace la herramienta más atractiva. Además de facilitar la identificación de la herramienta, permite el control del estado del recubrimiento durante su servicio y disminuye ligeramente el coeficiente de fricción.   Hyperlox está especialmente recomendado en herramientas de corte que precisen elevada resistencia al desgaste y elevada resistencia a la oxidación trabajando en seco y en condiciones muy extremas.

                                    Beneficios que aporta el recubrimiento Hyperlox Blue
                                    Muy elevada dureza y resistencia al desgaste.
                                    Relación dureza-tenacidad excelente proporcionada por la estructura de supernitruro.
                                    Evita las microsoldaduras en frío y en caliente.
                                    Excelente acabado superficial que minimiza los esfuerzos de corte y  la fricción en los canales de evacuación de viruta.
                                    Temperatura de oxidación más elevada que Tinalox SN2.
                                    Hyperlox Blue  puede obtenerse  una coloración azul característica que permite un mejor seguimiento del desgaste de la herramienta.


                                    <h6>Características Técnicas</h6>


                                    Dureza	37GPa (3500HV)
                                    Coeficiente de fricción	0.3-0.5
                                    Adherencia	Excelente
                                    Espesor de capa	2-5 µm
                                    Color	Azul Eléctrico
                                    Temperatura de obtención	450-500ºC
                                    Temperatura de degradación (oxidación)	1200ºC


                                    <h6>Aplicaciones de éxito</h6>
                                    Placas de fresado y ranurado.
                                    Fresas, escariadores de acero rápido y metal duro.
                                    Fresas de acabado y copiado.
                                    Fresas Madre.
                                    Brocas cañón, brocas de gran longitud.
                                    Sierras de disco.
                                    Cuchillas de corte
                                    Mecanizado de aceros inoxidables.
                                    Mecanizado de aceros templados a 55 HRC y 62 HRC.
                                    Mecanizado de las aleaciones de titanio, en especial TiAL6V4
                                    Posibilidad de eliminación de recubrimiento y recubrir de nuevo.
                                </Tab.Pane>
                                <Tab.Pane eventKey="tinalox-SN2">
                                    <h4>Tinalox  SN2 recubrimiento PVD basado en AlTiN</h4>
                                    Tinalox SN2 es un recubrimiento PVD basado en compuestos AlTiN estructurados en cristales extremadamente finos (supernitruros) que obtienen capas con tensiones internas muy bajas.   Tinalox SN2 está especialmente recomendado en herramientas de corte que precisen elevada resistencia al desgaste, baja fricción y elevada resistencia a la oxidación.

                                    <h6>Beneficios que aporta el recubrimiento TinAlox SN2</h6>
                                    Elevada dureza y resistencia al desgaste.
                                    Relación dureza-tenacidad excelente proporcionada por la estructura de supernitruro.
                                    Evita las microsoldaduras en frío y en caliente.
                                    Excelente acabado superficial que minimiza los esfuerzos de corte y  la fricción en los canales de evacuación de viruta.
                                    Elevada temperatura de oxidación.


                                    <h6>Características Técnicas</h6>


                                    Dureza	32GPa (3000HV)
                                    Coeficiente de fricción	0.3-0.5
                                    Adherencia	Excelente
                                    Espesor de capa	2-3µm
                                    Color	Negro violeta
                                    Temperatura de obtención	450-500ºC
                                    Temperatura de degradación (oxidación)	850ºC


                                    <h6>Aplicaciones de éxito</h6>
                                    Placas de fresado.
                                    Fresas, escariadores de acero rápido y metal duro.
                                    Sierras de disco.
                                    Cuchillas de corte
                                    Mecanizado en general de aceros y fundiciones, en seco y en húmedo.
                                    Posibilidad de eliminación de recubrimiento y recubrir de nuevo.
                                </Tab.Pane>
                                <Tab.Pane eventKey="SuperTiN">
                                    <h4>SuperTiN recubrimiento PVD basado en TiN</h4>
                                    SuperTiN es un recubrimiento PVD basado en TiN estructurados en forma de supernitruros desarrollados para cubrir las necesidades de resistencia al desgaste de herramientas de corte.   Está especialmente indicado en placas de torneado, herramientas sometidas a desgaste abrasivo  y adhesivo como brocas, machos y terrajas de roscar, sierras de disco.

                                    Beneficios que aporta el recubrimiento SuperTiN
                                    Elevada dureza y resistencia al desgaste.
                                    Relación dureza-tenacidad excelente proporcionada por el crecimiento nanoestructurado.
                                    Evita las microsoldaduras en frío.
                                    Excelente acabado superficial que minimiza los esfuerzos de corte.
                                    Facilidad para eliminar restos de material de corte que pudieran adherirse en las zonas de evacuación (flautas).


                                    <h6>Características Técnicas</h6>


                                    Dureza	25GPa (2500HV)
                                    Coeficiente de fricción	0.3-0.5
                                    Adherencia	Excelente
                                    Espesor de capa	2-5µm
                                    Color	Dorado
                                    Temperatura de obtención	450-500ºC
                                    Temperatura de degradación (oxidación)	500ºC


                                    <h6>Aplicaciones de éxito</h6>
                                    Placas de torneado.
                                    Cuchillas  de corte.
                                    Sierras de disco.
                                    Machos de roscar.
                                    Brocas.
                                    Fresas Madre
                                </Tab.Pane>
                                <Tab.Pane eventKey="AluSpeed">
                                    <h4>Freses-sense-recobrir</h4>
                                    CC AluSpeed recubrimiento PVD basado en Diboruro de Titanio (TiB2)
                                    CC AluSpeed es un recubrimiento PVD basado en compuestos de diboruro de titanio, de naturaleza cerámica con elevada dureza y resistencia a la oxidación en caliente. Los boruros en general y concretamente el de titanio presentan nula afinidad química con los materiales no férreos. CC AluSpeed está especialmente recomendado en herramientas de corte para mecanizar aleaciones de Aluminio, aleaciones de Cobre y aleaciones de Titanio.

                                    <h6>Beneficios que aporta el recubrimiento CC AluSpeed</h6>
                                    Elevada dureza y resistencia al desgaste.
                                    Relación dureza-tenacidad excelente : estructura de supernitruro.
                                    Mantiene los contornos del filo de corte.
                                    Mecanizados a velocidades altas de aleaciones blandas con elevada fricción.
                                    Evita las microsoldaduras en frío y en caliente en el mecanizado de aleaciones de aluminio debido a su nula afinidad química. No se forman aglomeraciones ni grumos en las zonas de corte.
                                    Excelente acabado superficial de la pieza mecanizada cinco veces superior al obtenido sin recubrimiento.
                                    Elevada temperatura de oxidación.


                                    <h6>Características Técnicas</h6>
                                    Dureza	22GPa (2300HV)
                                    Coeficiente de fricción	0.3-0.5
                                    Adherencia	Excelente
                                    Espesor de capa	2-5µm (6µm Aluspeed plus
                                    Color	Gris metálico
                                    Temperatura de obtención	450-500ºC
                                    Temperatura de degradación (oxidación)	950ºC


                                    <h6>Aplicaciones de éxito</h6>
                                    Placas y fresas de desbaste, fresado y mecanizado de aleaciones de aluminio y cobre  (Al/ Si hasta 10% en Si)
                                    Placas de ranurar aleaciones no férreas.
                                    Fresas de desbaste y fresado de aleación aeronáutica de Ti (TiAl6V4)
                                    Brocas de metal duro.
                                </Tab.Pane>
                                <Tab.Pane eventKey="SuperCrN">
                                    <h4>SuperCrN recubrimiento PVD basado en Nitruro de Cromo (CrN)</h4>
                                    SuperCrN es un recubrimiento PVD basado en CrN con estructura de supernitruro. SuperCrN  presenta una elevada dureza y bajo coeficiente de fricción. Especialmente indicado para herramientas de corte,  punzones y matrices para  trabajar materiales no férreos como las aleaciones de aluminio y cobre. Las fases de preparación superficial  y recubrimiento han sido especialmente desarrolladas  para garantizar  la adherencia solicitada en las herramientas de corte y en matricería  de corte y deformación, manteniendo la rugosidad inicial tras la etapa de recubrimiento. Se recomienda para la estampación en caliente de chapas recubiertas debido a la temperatura de oxidación  superior a SuperTiN y TiN Form.

                                    <h6>Beneficios que aporta el recubrimiento SuperCrN</h6>
                                    Resistencia al desgaste y a la corrosión.
                                    Capacidad antiadherente frente a aleaciones no férreas.Evita las microsoldaduras en frío y en caliente.
                                    Relación dureza- tenacidad superior a compuestos basados en TiN y AlTiN.
                                    Dureza de valor similar a SuperTiN con mejor coeficiente de fricción, mayor resistencia a la corrosión  y temperatura de oxidación superior.
                                    Excelente acabado superficial que minimiza los esfuerzos de corte y  la fricción en los canales de evacuación de viruta.
                                    Posibilidad de obtener espesores de capa superiores a los recubrimientos basados en TiN y AlTiN  sobre matrices de estampación en frío y/o en caliente.
                                    Mantiene valores de adherencia elevados  en espesores superiores a 10 μ debido a las bajas tensiones internas del recubrimiento.
                                    Tratamientos Dúplex. Combinado con tratamientos de nitruración (pulidos) permite mejorar el desgaste y fricción de piezas nitruradas.
                                    <h6>Características Técnicas</h6>
                                    Dureza	22GPa (2300HV)
                                    Coeficiente de fricción	0.3
                                    Adherencia	Excelente
                                    Espesor de capa	2-3 µm, 8-10 µm
                                    Color	Gris metálico
                                    Temperatura de obtención	250ºC – 450ºC
                                    Temperatura de degradación (oxidación)	700ºC
                                    <h6>Aplicaciones de éxito</h6>
                                    Fresas, brocas, machos de roscar, escariadores para aleaciones no férreas.
                                    Mecanizado de  aleaciones de aluminio aeronáuticas.
                                    Mecanizado de cobre, bronces y latones. Bronces al Berilio.
                                    Matrices de corte de aleaciones no férreas.
                                    Matrices de estampación y laminado.
                                    Punzones normalizados y expulsores (incluso sobre expulsores nitrurados)
                                </Tab.Pane>
                                <Tab.Pane eventKey="HSN2">
                                    <h4>HSN2 es  recubrimiento PVD basado en capas múltiples dopadas con Si</h4>
                                    HSN2 es un recubrimiento PVD basado en compuestos dopados de Ti y Si. La combinación de nitruros de Titanio y Silicio obtienen dureza muy elevada y refractariedad con elevada resistencia a la oxidación en caliente. HSN2 está especialmente indicado para mecanizar aceros templados a durezas superiores a 55 HRC.

                                    <h6>Beneficios que aporta el recubrimiento HSN2</h6>
                                    Elevada dureza y resistencia al desgaste.
                                    Mantiene los contornos del filo de corte.
                                    Mecanizados de aceros para matricería y modes con durezas superiores a 60 HRC.
                                    Elevada temperatura de oxidación.


                                    <h6>Características Técnicas</h6>


                                    Dureza	40GPa (4000HV)
                                    Coeficiente de fricción	0.3-0.5
                                    Adherencia	Excelente
                                    Espesor de capa	2-3 µm
                                    Color	Bronce
                                    Temperatura de obtención	450-500ºC
                                    Temperatura de degradación (oxidación)	950ºC


                                    <h6>Aplicaciones de éxito</h6>
                                    Placas y fresas de fresado y mecanizado de aceros 1.2344 (55 HRC), 1.2083 (52 HRC), 1.2379 (62 HRC).
                                    Mecanizado en seco a durezas superiores a 70 HRC
                                    Velocidades de corte de 250 m/min y 0,02 a 0,3 mm/rev.
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

            </div>
        </main>
    );
};
export default Recubrimientos;

