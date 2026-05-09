import { useState } from 'react'
import { Download, Edit, CheckCircle2 } from 'lucide-react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import Alert from '../components/ui/Alert'
import { Table, THead, TBody, Tr, Th, Td } from '../components/ui/Table'
import { servicios } from '../data/servicios'
import { choferes } from '../data/choferes'
import { vehiculos } from '../data/vehiculos'
import { getAsignaciones, actualizarAsignacion } from '../data/asignaciones'

export default function EscalaOperativa() {
  const [editandoId, setEditandoId] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [choferSeleccionado, setChoferSeleccionado] = useState(null)
  const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(null)
  const [aprobada, setAprobada] = useState(false)

  const asignaciones = getAsignaciones()

  const abrirModal = (servicioId) => {
    const asign = asignaciones.find(a => a.servicioId === servicioId)
    if (asign) {
      setEditandoId(servicioId)
      setChoferSeleccionado(asign.choferId)
      setVehiculoSeleccionado(asign.vehiculoId)
      setModalOpen(true)
    }
  }

  const guardarCambios = () => {
    if (editandoId && choferSeleccionado && vehiculoSeleccionado) {
      actualizarAsignacion(editandoId, choferSeleccionado, vehiculoSeleccionado)
      setModalOpen(false)
      setEditandoId(null)
    }
  }

  const getEstadoBadge = (servicioId) => {
    const asign = asignaciones.find(a => a.servicioId === servicioId)
    if (!asign) return <Badge variant="error">Sin recurso</Badge>
    if (asign.estado === 'aprobado') return <Badge variant="success">Aprobado</Badge>
    return <Badge variant="warning">{asign.estado}</Badge>
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Escala Operativa</h1>
          <p className="text-slate-600 mt-2">Propuesta de asignación de servicios para mañana</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm">
            <Download size={16} className="mr-2" />
            Exportar PDF
          </Button>
          <Button
            size="sm"
            onClick={() => setAprobada(!aprobada)}
            variant={aprobada ? 'success' : 'primary'}
          >
            <CheckCircle2 size={16} className="mr-2" />
            {aprobada ? 'Aprobada' : 'Aprobar Escala'}
          </Button>
        </div>
      </div>

      {aprobada && (
        <Alert variant="success" title="Escala Operativa Aprobada">
          La escala ha sido aprobada. Se enviará confirmación a todos los choferes.
        </Alert>
      )}

      {asignaciones.length === 0 && (
        <Alert variant="info" title="Sin asignaciones">
          Ejecuta el algoritmo primero en la sección "Algoritmo de Asignación" para generar la escala.
        </Alert>
      )}

      {asignaciones.length > 0 && (
        <>
          <Card>
            <Table>
              <THead>
                <Tr>
                  <Th>Hora</Th>
                  <Th>Servicio</Th>
                  <Th>Cliente</Th>
                  <Th>Origen</Th>
                  <Th>Destino</Th>
                  <Th>Chofer</Th>
                  <Th>Vehículo</Th>
                  <Th>Pax</Th>
                  <Th>Estado</Th>
                  <Th></Th>
                </Tr>
              </THead>
              <TBody>
                {servicios.map((srv) => {
                  const asign = asignaciones.find(a => a.servicioId === srv.id)
                  const chofer = asign ? choferes.find(c => c.id === asign.choferId) : null
                  const vehiculo = asign ? vehiculos.find(v => v.id === asign.vehiculoId) : null

                  return (
                    <Tr
                      key={srv.id}
                      className={asign?.estado === 'aprobado' ? 'bg-green-50' : ''}
                    >
                      <Td className="font-medium">{srv.hora}</Td>
                      <Td>
                        <Badge variant="primary">{srv.tipo}</Badge>
                      </Td>
                      <Td>{srv.cliente}</Td>
                      <Td className="text-xs">{srv.origen.substring(0, 20)}</Td>
                      <Td className="text-xs">{srv.destino.substring(0, 20)}</Td>
                      <Td>{chofer?.nombre || '-'}</Td>
                      <Td>{vehiculo?.tipo || '-'}</Td>
                      <Td className="text-center">{srv.pasajeros}</Td>
                      <Td>{getEstadoBadge(srv.id)}</Td>
                      <Td>
                        {asign && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => abrirModal(srv.id)}
                          >
                            <Edit size={14} />
                          </Button>
                        )}
                      </Td>
                    </Tr>
                  )
                })}
              </TBody>
            </Table>
          </Card>

          <div className="grid grid-cols-4 gap-4">
            <Card>
              <p className="text-sm text-slate-600">Total Servicios</p>
              <p className="text-3xl font-bold text-slate-900">{servicios.length}</p>
            </Card>
            <Card>
              <p className="text-sm text-slate-600">Asignados</p>
              <p className="text-3xl font-bold text-green-600">{asignaciones.length}</p>
            </Card>
            <Card>
              <p className="text-sm text-slate-600">Sin Asignar</p>
              <p className="text-3xl font-bold text-red-600">{servicios.length - asignaciones.length}</p>
            </Card>
            <Card>
              <p className="text-sm text-slate-600">Completitud</p>
              <p className="text-3xl font-bold text-blue-600">
                {Math.round((asignaciones.length / servicios.length) * 100)}%
              </p>
            </Card>
          </div>
        </>
      )}

      {/* Modal de edición */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Editar Asignación"
        actions={[
          { label: 'Cancelar', variant: 'secondary', onClick: () => setModalOpen(false) },
          { label: 'Guardar Cambios', variant: 'primary', onClick: guardarCambios }
        ]}
      >
        {editandoId && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Chofer</label>
              <select
                value={choferSeleccionado || ''}
                onChange={(e) => setChoferSeleccionado(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Selecciona un chofer</option>
                {choferes
                  .filter(c => c.estado === 'disponible')
                  .map(c => (
                    <option key={c.id} value={c.id}>
                      {c.nombre} ({c.idiomas.join(', ')})
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Vehículo</label>
              <select
                value={vehiculoSeleccionado || ''}
                onChange={(e) => setVehiculoSeleccionado(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Selecciona un vehículo</option>
                {vehiculos
                  .filter(v => v.estado === 'disponible')
                  .map(v => (
                    <option key={v.id} value={v.id}>
                      {v.tipo} ({v.capacidad} pax) - {v.placa}
                    </option>
                  ))}
              </select>
            </div>

            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                💡 Cambios manuales serán registrados como "Revisado" para auditoría.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
