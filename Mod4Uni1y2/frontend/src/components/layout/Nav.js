import '../../styles/components/layout/Nav.css'

import { NavLink } from "react-router-dom"

const Nav = (props) => {
    return (
        <nav >
            <div id="jscn">
                <ul className="holder">
                    <li><NavLink to="/Pacientes/PacientesPage" className={({ isActive }) => (isActive ? 'active' : '')}>Pacientes</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/Pacientes/PacientesTurnosPage">Turnos Analisis</NavLink>
                            <NavLink to="/Pacientes/PacientesPruebasMedicasPage">Pruebas Medicas</NavLink>
                            <NavLink to="/Pacientes/PacientesCoberturasPage">Coberturas Medicas</NavLink>
                            <NavLink to="/Pacientes/PacientesPortalPage">Portal Pacientes</NavLink>
                        </div>
                    </li>
                    <li><NavLink to="/SectoresPage" className={({ isActive }) => (isActive ? 'active' : '')}>Sectores</NavLink></li>
                    <li><NavLink to="/NosotrosPage" className={({ isActive }) => (isActive ? 'active' : '')}>Nosotros</NavLink></li>
                    <li><NavLink to="/NovedadesPage" className={({ isActive }) => (isActive ? 'active' : '')}>Novedades</NavLink></li>
                    <li><NavLink to="/EmpresasPage" className={({ isActive }) => (isActive ? 'active' : '')}>Empresas</NavLink></li>
                    <li><NavLink to="/ContactoPage" className={({ isActive }) => (isActive ? 'active' : '')}>Contacto</NavLink></li>


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