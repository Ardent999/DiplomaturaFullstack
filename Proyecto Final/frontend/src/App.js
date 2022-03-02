import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './normalize.css'
import './App.css'

import Header from './components/layout/Header'
import Banner from './components/layout/Banner'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import PacientesPaage from './pages/Pacientes/PacientesPage'
import SectoresPage from './pages/SectoresPage'
import NosotrosPage from './pages/NosotrosPage'
import NovedadesPage from './pages/NovedadesPage'
import EmpresasPage from './pages/EmpresasPage'
import ContactoPage from './pages/ContactoPage'
import PacientesCoberturasPage from './pages/Pacientes/PacientesCoberturasPage'
import PacientesPortalPage from './pages/Pacientes/PacientesPortalPage'
import PacientesPruebasMedicasPage from './pages/Pacientes/PacientesPruebasMedicasPage'
import PacientesTurnosPage from './pages/Pacientes/PacientesTurnosPage'

function App() {
  return (
    <div className="App">
      <Router>

      <Header />
      <Banner />
      <Nav />

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Pacientes" exact element={<PacientesPaage />} />
        <Route path="/Sectores" exact element={<SectoresPage />} />
        <Route path="/Nosotros" exact element={<NosotrosPage />} />
        <Route path="/Novedades" exact element={<NovedadesPage />} />
        <Route path="/Empresas" exact element={<EmpresasPage />} />
        <Route path="/Contacto" exact element={<ContactoPage />} />
        <Route path="/Pacientes/Coberturas" exact element={<PacientesCoberturasPage />} />
        <Route path="/Pacientes/Portal" exact element={<PacientesPortalPage />} />
        <Route path="/Pacientes/PruebasMedicas" exact element={<PacientesPruebasMedicasPage />} />
        <Route path="/Pacientes/Turnos" exact element={<PacientesTurnosPage />} />
      </Routes>

      <Footer />

      </Router>
    </div>
  );
}

export default App;
