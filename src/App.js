import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import "./App.css";
import InicioPage from "./pages/InicioPage";
// import ContactoPage from "./pages/ContactoPage";
import FormulasPage from "./pages/FormulasPage";
import NosotrosPage from "./pages/NosotrosPage";
import ProductosPage from "./pages/ProductosPage";
import Recubrimientos from "./pages/Recubrimientos";
import Distribuidor from "./components/inicio/Distribuidor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav className="nav" />
        <Switch>
          <Route path="/" exact component={InicioPage} />
          <Route path="/nosotros" exact component={NosotrosPage} />
          {/* <Route path="/contacto" exact component={ContactoPage} /> */}
          <Route path="/formulas" exact component={FormulasPage} />
          <Route path="/productos" exact component={ProductosPage} />
          <Route path="/recubrimientos" exact component={Recubrimientos} />
          <Route path="/distribuidor" exact component={Distribuidor} />
        </Switch>
        <aside>
          <span className="whatsapp">
            <a
              href="https://wa.me/5493564508084"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} id="icono-whatsapp" />
            </a>
          </span>
          <span className="ubicacion">
            <a
              href="https://g.page/RNMToolsSAS?share"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} id="icono-ubicacion" />
            </a>
          </span>
          <span className="instagram">
            <a
              href="https://www.instagram.com/tecno.tools/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} id="icono-instagram" />
            </a>
          </span>
          <span className="telefono">
            <a href="tel:+5403564435375" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faPhone} id="icono-telefono" />
            </a>
          </span>
          <span className="facebook">
            <a
              href="https://www.facebook.com/tecnotools1"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} id="icono-facebook" />
            </a>
          </span>
        </aside>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
