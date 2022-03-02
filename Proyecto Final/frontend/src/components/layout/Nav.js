import '../../styles/components/layout/Nav.css'

import { NavLink } from "react-router-dom"

const Nav = (props) => {
    return (
        <nav >
            <div id="jscn">
                <ul className="holder">

                    <li className='dropdown'><NavLink to="/Pacientes" className={({ isActive }) => (isActive ? 'active' : '')} id="hovt dropdown">Pacientes</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/Pacientes/Turnos">Turnos Analisis</NavLink>
                            <NavLink to="/Pacientes/PruebasMedicas">Pruebas Medicas</NavLink>
                            <NavLink to="/Pacientes/Coberturas">Coberturas Medicas</NavLink>
                            <NavLink to="/Pacientes/Portal">Portal Pacientes</NavLink>
                        </div>
                    </li>

                    <li><NavLink to="/Sectores" className={({ isActive }) => (isActive ? 'active' : '')}>Sectores</NavLink></li>
                    <li><NavLink to="/Nosotros" className={({ isActive }) => (isActive ? 'active' : '')}>Nosotros</NavLink></li>
                    <li><NavLink to="/Novedades" className={({ isActive }) => (isActive ? 'active' : '')}>Novedades</NavLink></li>
                    <li><NavLink to="/Empresas" className={({ isActive }) => (isActive ? 'active' : '')}>Empresas</NavLink></li>
                    <li><NavLink to="/Contacto" className={({ isActive }) => (isActive ? 'active' : '')}>Contacto</NavLink></li>


                </ul>
            </div>
        </nav>

    );
}

// window.onscroll = function () { scrollFunction() };

//         function scrollFunction() {
//             if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//                 document.getElementById("jsc").style.fontSize = "0.75em";
//                 document.getElementById("jsch").style.height = "7em";
//                 document.getElementById("jsc").style.height = "7em";
//                 document.getElementById("jsch").style.bottom = "25px";
//                 document.getElementById("jsci").style.width = "75px";
//                 document.getElementById("jscn").style.top = "6.5em";
//                 document.getElementById("jscn").style.bottom = "-2em";

//             } else {
//                 document.getElementById("jsc").style.fontSize = "1em";
//                 document.getElementById("jsci").style.width = "100px";
//                 document.getElementById("jsch").style.bottom = "40px";
//             }
//         }



export default Nav;