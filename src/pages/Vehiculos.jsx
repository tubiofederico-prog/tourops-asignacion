import { useState } from 'react'
import { Wifi, AirVent, Music, Calendar, Users, Info } from 'lucide-react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import { vehiculos } from '../data/vehiculos'

const getIconoTipo = (tipo) => {
  const iconos = {
    'Sedan': '🚙',
    'Van 9 pax': '🚐',
    'Minibus 15 pax': '🚌',
    'Bus 30 pax': '🚌',
    'Camioneta 4x4': '🚙'
  }
  return iconos[tipo] || '🚗'
}

export default function Vehiculos() {
  const [selectedVehiculo, setSelectedVehiculo] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const abrirDetalle = (vehiculo) => {
    setSelectedVehiculo(vehiculo)
    setModalOpen(true)
  }

  const getEstadoBadge = (estado) => {
    const variants = {
      disponible: 'success',
      'en servicio': 'warning',
      mantenimiento: 'error'
    }
    return <Badge variant={variants[estado]}>{estado}</Badge>
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Vehículos</h1>
        <p className="text-slate-600 mt-2">Flota de transporte disponible</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehiculos.map((vehiculo) => (
          <Card key={vehiculo.id} className="hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-4xl">{getIconoTipo(vehiculo.tipo)}</p>
              </div>
              {getEstadoBadge(vehiculo.estado)}
            </div>

            <h3 className="text-lg font-semibold text-slate-900">{vehiculo.tipo}</h3>
            <p className="text-sm text-slate-600">Placa: {vehiculo.placa}</p>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <Users size={16} />
                Capacidad: {vehiculo.capacidad} pasajeros
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar size={16} />
                Año: {vehiculo.anio}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-600 mb-2">SERVICIOS</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="info">A/C</Badge>
                {vehiculo.equipoAudio && <Badge variant="info">Audio</Badge>}
                {vehiculo.wifi && <Badge variant="info">WiFi</Badge>}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center">
              <div>
                <p className="text-xs text-slate-600">Asignado a</p>
                <p className="text-sm font-medium text-slate-900">
                  {vehiculo.serviciosAsignados.length || '-'}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => abrirDetalle(vehiculo)}
              >
                <Info size={16} />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal de detalle */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedVehiculo?.tipo}
        size="md"
      >
        {selectedVehiculo && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-600">Placa</p>
                <p className="text-lg font-semibold text-slate-900">{selectedVehiculo.placa}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Año</p>
                <p className="text-lg font-semibold text-slate-900">{selectedVehiculo.anio}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600">Capacidad</p>
              <p className="text-lg font-semibold text-slate-900">{selectedVehiculo.capacidad} pasajeros</p>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">Equipamiento</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success">A/C Automático</Badge>
                {selectedVehiculo.equipoAudio && <Badge variant="success">Sistema de Audio</Badge>}
                {selectedVehiculo.wifi && <Badge variant="success">WiFi</Badge>}
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">Estado Actual</p>
              {getEstadoBadge(selectedVehiculo.estado)}
            </div>

            {selectedVehiculo.restricciones.length > 0 && (
              <div>
                <p className="text-sm text-slate-600 mb-2">Restricciones</p>
                <Badge variant="error">{selectedVehiculo.restricciones.join(', ')}</Badge>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  )
}
