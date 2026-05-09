import { useState } from 'react'
import { Upload, CheckCircle2, AlertCircle, AlertTriangle } from 'lucide-react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Alert from '../components/ui/Alert'
import { Table, THead, TBody, Tr, Th, Td } from '../components/ui/Table'
import { servicios } from '../data/servicios'

export default function CargaServicios() {
  const [estado, setEstado] = useState('vacio')
  const [serviciosCargados, setServiciosCargados] = useState([])

  const simularCarga = () => {
    setEstado('cargando')
    setTimeout(() => {
      setServiciosCargados(servicios.map(s => ({
        ...s,
        estado: Math.random() > 0.85 ? (Math.random() > 0.5 ? 'faltante' : 'conflicto') : 'correcto'
      })))
      setEstado('procesado')
    }, 2000)
  }

  const getEstadoBadge = (estado) => {
    const variants = {
      correcto: 'success',
      faltante: 'warning',
      conflicto: 'error'
    }
    const labels = {
      correcto: 'Correcto',
      faltante: 'Dato faltante',
      conflicto: 'Conflicto'
    }
    return <Badge variant={variants[estado]}>{labels[estado]}</Badge>
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Carga de Servicios</h1>
        <p className="text-slate-600 mt-2">Importa servicios desde Excel o CSV</p>
      </div>

      {/* Zona Drag & Drop */}
      {estado === 'vacio' && (
        <Card
          className="border-2 border-dashed border-slate-300 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition"
          onClick={simularCarga}
        >
          <div className="py-12 text-center">
            <Upload className="mx-auto text-slate-400 mb-4" size={48} />
            <h3 className="text-lg font-semibold text-slate-900">Arrastra archivo aquí</h3>
            <p className="text-slate-600 mt-2">o haz clic para seleccionar un archivo Excel/CSV</p>
            <div className="mt-4 text-xs text-slate-500">
              Formatos soportados: .xlsx, .csv | Máx. 5MB
            </div>
          </div>
        </Card>
      )}

      {/* Cargando */}
      {estado === 'cargando' && (
        <Card className="text-center py-8">
          <div className="inline-block">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-200 border-t-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600 font-medium">Procesando archivo...</p>
            <p className="text-xs text-slate-500 mt-2">Por favor espera</p>
          </div>
        </Card>
      )}

      {/* Archivo procesado */}
      {estado === 'procesado' && (
        <>
          <Alert variant="success" title="Archivo cargado correctamente">
            Se encontraron {serviciosCargados.length} servicios. Revisa los datos a continuación.
          </Alert>

          <Card>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-slate-900">Vista Previa de Servicios</h2>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">
                  Descargar reporte
                </Button>
              </div>
            </div>

            <Table>
              <THead>
                <Tr>
                  <Th>File #</Th>
                  <Th>Cliente</Th>
                  <Th>Tipo de Servicio</Th>
                  <Th>Origen</Th>
                  <Th>Destino</Th>
                  <Th>Hora</Th>
                  <Th>Pax</Th>
                  <Th>Estado</Th>
                </Tr>
              </THead>
              <TBody>
                {serviciosCargados.map((srv) => (
                  <Tr key={srv.id}>
                    <Td className="font-medium">{srv.file}</Td>
                    <Td>{srv.cliente}</Td>
                    <Td>
                      <Badge variant="primary">{srv.tipo}</Badge>
                    </Td>
                    <Td>{srv.origen}</Td>
                    <Td>{srv.destino}</Td>
                    <Td className="font-medium">{srv.hora}</Td>
                    <Td className="text-center">{srv.pasajeros}</Td>
                    <Td>{getEstadoBadge(srv.estado)}</Td>
                  </Tr>
                ))}
              </TBody>
            </Table>
          </Card>

          {/* Resumen de validación */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="border-l-4 border-l-green-500">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={32} className="text-green-600" />
                <div>
                  <p className="text-sm text-slate-600">Correctos</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {serviciosCargados.filter(s => s.estado === 'correcto').length}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <div className="flex items-center gap-3">
                <AlertTriangle size={32} className="text-yellow-600" />
                <div>
                  <p className="text-sm text-slate-600">Con advertencias</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {serviciosCargados.filter(s => s.estado === 'faltante').length}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <div className="flex items-center gap-3">
                <AlertCircle size={32} className="text-red-600" />
                <div>
                  <p className="text-sm text-slate-600">Con conflictos</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {serviciosCargados.filter(s => s.estado === 'conflicto').length}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex gap-4">
            <Button variant="secondary" onClick={() => setEstado('vacio')}>
              Cargar otro archivo
            </Button>
            <Button>
              Procesar con Algoritmo
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
