import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

// Pages
import Dashboard from './pages/Dashboard'
import CargaServicios from './pages/CargaServicios'
import Choferes from './pages/Choferes'
import Vehiculos from './pages/Vehiculos'
import MotorReglas from './pages/MotorReglas'
import Algoritmo from './pages/Algoritmo'
import EscalaOperativa from './pages/EscalaOperativa'
import AjusteMejora from './pages/AjusteMejora'
import Integraciones from './pages/Integraciones'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/carga" element={<CargaServicios />} />
          <Route path="/choferes" element={<Choferes />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/reglas" element={<MotorReglas />} />
          <Route path="/algoritmo" element={<Algoritmo />} />
          <Route path="/escala" element={<EscalaOperativa />} />
          <Route path="/mejora" element={<AjusteMejora />} />
          <Route path="/integraciones" element={<Integraciones />} />
        </Routes>
      </Layout>
    </Router>
  )
}
