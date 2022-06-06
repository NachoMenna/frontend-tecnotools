import '../styles/pages/Nosotros.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function NosotrosPage() {
     return (
          <main className='empresa-holder'>
               <div className='container'>
                    <div className='nosotros text-center fs-6' id='contenedor-empresa'>
                         <h2>Nosotros</h2>
                         Somos una empresa con 30 años comercializando herramientas de corte a las industrias de todo Córdoba y Santa Fé. Tecno Tools fué fundada por Roberto Menna en la localidad de San
                         Francisco, ubicación estratégica para abarcar así, la principal zona de
                         producción Agro-Industrial y Automotriz Argentina.
                         Contamos con la representación de marcas líderes a nivel mundial en el mecanizado, garantizando
                         así
                         la productividad a nuestros clientes.
                         Nuestro propósito es agregar valor a los clientes a través de la atención técnica de nuestros
                         especialistas y la calidad de nuestras herramientas.
                    </div>
                    <div className='contenedor-datos-mapa'>
                         <div className='datos-de-contacto'>
                              <div className='tarjeta'>
                                   <FontAwesomeIcon icon={faWhatsapp} id="nosotros-icono" />
                                   <div className='contenido'>
                                        +54 9 3564 508084
                                   </div>
                              </div>
                              <div className='tarjeta'>
                                   <FontAwesomeIcon icon={faEnvelope} id="nosotros-icono" />
                                   <div className='contenido'>
                                        ventas@tecnotoolsarg.com
                                        compras@tecnotoolsarg.com
                                   </div>
                              </div>
                              <div className='tarjeta'>
                                   <FontAwesomeIcon icon={faPhone} id="nosotros-icono" />
                                   <div className='contenido'>
                                        +54 9 03564 435375
                                   </div>
                              </div>
                              <div className='tarjeta'>
                                   <FontAwesomeIcon icon={faInstagram} id="nosotros-icono" />
                                   <div className='contenido'>
                                        @tecno.tools
                                   </div>
                              </div>
                              <div className='tarjeta'>
                                   <FontAwesomeIcon icon={faFacebookF} id="nosotros-icono" />
                                   <div className='contenido'>
                                        @tecnotools1
                                   </div>
                              </div>
                         </div>

                         <div className='map'>
                              <iframe title='google-maps' className='mapa'
                                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.1120740991682!2d-62.09848028530558!3d-31.43858140447076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cb28128f91033d%3A0x16f3615f273045c0!2sLavalle%201137%2C%20San%20Francisco%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1631063272117!5m2!1ses!2sar"
                              />
                         </div>
                    </div>
               </div>
          </main>
     );
}
export default NosotrosPage;