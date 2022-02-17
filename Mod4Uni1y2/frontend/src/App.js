import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header'
import Banner from './components/layout/Banner'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import PacientesPage from './pages/Pacientes/PacientesPage'
import SectoresPage from './pages/SectoresPage'
import NosotrosPage from './pages/NosotrosPage'
import NovedadesPage from './pages/NovedadesPage'
import EmpresasPage from './pages/EmpresasPage'
import ContactoPage from './pages/ContactoPage'

function App() {
  return (
    <div className="App">
      <Router>

      <Header />
      <Banner />
      <Nav />

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/PacientesPage" exact element={<PacientesPage />} />
        <Route path="/SectoresPage" exact element={<SectoresPage />} />
        <Route path="/NosotrosPage" exact element={<NosotrosPage />} />
        <Route path="/NovedadesPage" exact element={<NovedadesPage />} />
        <Route path="/EmpresasPage" exact element={<EmpresasPage />} />
        <Route path="/ContactoPage" exact element={<ContactoPage />} />
      </Routes>

      <Footer />

      </Router>
    </div>
  );
}

export default App;
