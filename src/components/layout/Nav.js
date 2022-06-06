import '../../styles/components/leyout/Nav.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Nav = (props) => {
    window.onscroll = function () {
        var y = window.scrollY;
        console.log(y);
        if (y > 40) {
            var d = document.getElementById("logo-tecno-tools");
            var e = document.getElementById("nav");
            d.setAttribute("style", "width: 140px; margin-left: 80%");
            e.setAttribute("style", "height: 62px");
        } else {
            var s = document.getElementById("logo-tecno-tools");
            var t = document.getElementById("nav");
            s.setAttribute("style", " width: 240px; height: auto");
            t.setAttribute("style", "height: 20%");
        }
    };
    return (
        <div className="container">
            <nav className='navbar navbar-expand-lg fixed-top navbar-light bg-light' id="nav">
                <div className='container-fluid'>
                    <Link exact to="/" className="navbar-brand" >
                        <img src="images/logo-para-sitio-web.png" alt="logo-tecno-tools" id='logo-tecno-tools' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" background-color="white">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="barra-de-texto">
                            <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/">Inicio</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" id="navbarDropdown" exact to="/productos" >Productos</NavLink>
                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="">Inicio</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>  */}
                            </li>


                            <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/formulas">Formulas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/nosotros">Empresa</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/contacto"><p>Contacto</p></NavLink>
                            </li> */}


                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    );
}
export default Nav;
