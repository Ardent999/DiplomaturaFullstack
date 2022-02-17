import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <nav >
            <div id="jscn">
                <ul className="holder">
                    <li><Link to="/Pacientes/PacientesPage">Pacientes</Link>
                        <div className="dropdown-content">
                            <Link to="/Pacientes/PacientesTurnosPage">Turnos Analisis</Link>
                            <Link to="/Pacientes/PacientesPruebasMedicasPage">Pruebas Medicas</Link>
                            <Link to="/Pacientes/PacientesCoberturasPage">Coberturas Medicas</Link>
                            <Link to="/Pacientes/PacientesPortalPage">Portal Pacientes</Link>
                        </div>
                    </li>
                    <li><Link to="/SectoresPage">Sectores</Link></li>
                    <li><Link to="/NosotrosPage">Nosotros</Link></li>
                    <li><Link to="/NovedadesPage">Novedades</Link></li>
                    <li><Link to="/EmpresasPage">Empresas</Link></li>
                    <li><Link to="/ContactoPage">Contacto</Link></li>


                </ul>
            </div>
        </nav>

    );
}

export default Nav;