import { useState } from 'react'
import { Phone, Languages, Calendar, Star, Info } from 'lucide-react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import { choferes } from '../data/choferes'

export default function Choferes() {
  const [selectedChofer, setSelectedChofer] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const abrirDetalle = (chofer) => {
    setSelectedChofer(chofer)
    setModalOpen(true)
  }

  const getEstadoBadge = (estado) => {
    const variants = {
      disponible: 'success',
      asignado: 'warning',
      franco: 'error'
    }
    return <Badge variant={variants[estado]}>{estado.charAt(0).toUpperCase() + estado.slice(1)}</Badge>
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Choferes</h1>
        <p className="text-slate-600 mt-2">Gestiona tu equipo de choferes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {choferes.map((chofer) => (
          <Card key={chofer.id} className="hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg">
                {chofer.foto}
              </div>
              <div>
                <Star size={16} className="text-yellow-400 inline" fill="currentColor" />
                <span className="ml-1 text-sm font-semibold text-slate-900">{chofer.rating}</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-slate-900">{chofer.nombre}</h3>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <Phone size={16} />
                {chofer.telefono}
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar size={16} />
                {chofer.estado === 'franco' ? (
                  <span>Franco</span>
                ) : (
                  <span>{chofer.horarioInicio} - {chofer.horarioFin}</span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-600 mb-2">IDIOMAS</p>
              <div className="flex flex-wrap gap-1">
                {chofer.idiomas.map((idioma) => (
                  <Badge key={idioma} variant="info" className="text-xs">
                    {idioma}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-600 mb-2">HABILIDADES</p>
              {chofer.habilidades.length > 0 ? (
                <div className="flex flex-wrap gap-1">
                  {chofer.habilidades.slice(0, 3).map((hab) => (
                    <Badge key={hab} variant="primary" className="text-xs">
                      {hab}
                    </Badge>
                  ))}
                </div>
              ) : (
                <span className="text-xs text-slate-500">Conductor estándar</span>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center">
              <div>
                <p className="text-xs text-slate-600">Estado</p>
                {getEstadoBadge(chofer.estado)}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => abrirDetalle(chofer)}
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
        title={selectedChofer?.nombre}
        size="md"
      >
        {selectedChofer && (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-600">Experiencia</p>
              <p className="text-lg font-semibold text-slate-900">{selectedChofer.experiencia}</p>
            </div>

            <div>
              <p className="text-sm text-slate-600">Teléfono</p>
              <p className="text-lg font-semibold text-slate-900">{selectedChofer.telefono}</p>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">Habilidades especiales</p>
              {selectedChofer.habilidades.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectedChofer.habilidades.map((hab) => (
                    <Badge key={hab} variant="primary">{hab}</Badge>
                  ))}
                </div>
              ) : (
                <p className="text-slate-600">Sin habilidades especiales</p>
              )}
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2">Servicios asignados hoy</p>
              <p className="text-slate-900">{selectedChofer.serviciosAsignados.length || 'Ninguno'}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
