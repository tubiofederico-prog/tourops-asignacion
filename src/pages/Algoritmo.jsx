import { useState } from 'react'
import { Zap, CheckCircle2, AlertCircle, Clock } from 'lucide-react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Alert from '../components/ui/Alert'
import { servicios } from '../data/servicios'
import { choferes } from '../data/choferes'
import { vehiculos } from '../data/vehiculos'
import { asignarServicio, limpiarAsignaciones, getAsignaciones } from '../data/asignaciones'

export default function Algoritmo() {
  const [estado, setEstado] = useState('idle') // idle, procesando, completado
  const [resultados, setResultados] = useState(null)

  const ejecutarAlgoritmo = async () => {
    setEstado('procesando')
    limpiarAsignaciones()

    // Simular procesamiento
    await new Promise(resolve => setTimeout(resolve, 3000))

    // Generar asignaciones mock
    let asignaciones = []
    let conflictos = []
    let sinRecurso = []

    servicios.forEach((servicio, idx) => {
      if (Math.random() > 0.15) {
        const choferAleatorio = choferes[Math.floor(Math.random() * choferes.length)]
        const vehiculoAleatorio = vehiculos[Math.floor(Math.random() * vehiculos.length)]
        const confianza = 75 + Math.floor(Math.random() * 25)

        asignarServicio(servicio.id, choferAleatorio.id, vehiculoAleatorio.id, confianza)
        asignaciones.push({
          servicioId: servicio.id,
          choferId: choferAleatorio.id,
          vehiculoId: vehiculoAleatorio.id,
          confianza
        })
      } else if (Math.random() > 0.5) {
        conflictos.push(servicio.id)
      } else {
        sinRecurso.push(servicio.id)
      }
    })

    setResultados({
      totalServicios: servicios.length,
      procesados: asignaciones.length,
      conflictos: conflictos.length,
      sinRecurso: sinRecurso.length,
      asignaciones: getAsignaciones(),
      timestamp: new Date().toLocaleTimeString('es-AR')
    })

    setEstado('completado')
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Algoritmo de Asignación</h1>
        <p className="text-slate-600 mt-2">Ejecuta el motor de optimización automática</p>
      </div>

      {/* Panel de control */}
      <Card className="border-l-4 border-l-blue-600">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Motor de Asignación</h3>
            <p className="text-slate-600 mt-1">
              {estado === 'idle' && 'Listo para ejecutar'}
              {estado === 'procesando' && 'Procesando...'}
              {estado === 'completado' && `Completado a las ${resultados.timestamp}`}
            </p>
          </div>
          <Button
            size="lg"
            disabled={estado === 'procesando'}
            onClick={ejecutarAlgoritmo}
          >
            <Zap size={20} className="mr-2" />
            {estado === 'procesando' ? 'Procesando...' : 'Ejecutar Algoritmo'}
          </Button>
        </div>
      </Card>

      {/* Procesando */}
      {estado === 'procesando' && (
        <Card className="text-center py-12">
          <div className="inline-block">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Procesando algoritmo</h3>
            <p className="text-slate-600">Analizando {servicios.length} servicios...</p>
            <div className="mt-4 space-y-1 text-sm text-slate-600">
              <p>✓ Validando capacidades de vehículos</p>
              <p>✓ Revisando disponibilidad de choferes</p>
              <p>✓ Analizando horarios y tiempos</p>
              <p>✓ Asignando recursos óptimos</p>
            </div>
          </div>
        </Card>
      )}

      {/* Resultados */}
      {estado === 'completado' && resultados && (
        <>
          <Alert variant="success" title="Asignación completada">
            Se analizaron {resultados.totalServicios} servicios y se asignaron {resultados.procesados} exitosamente.
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-l-4 border-l-blue-600">
              <p className="text-sm text-slate-600">Servicios Procesados</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">{resultados.procesados}</p>
              <p className="text-xs text-slate-500 mt-1">de {resultados.totalServicios}</p>
            </Card>

            <Card className="border-l-4 border-l-yellow-600">
              <p className="text-sm text-slate-600">Con Conflicto</p>
              <p className="text-3xl font-bold text-yellow-600 mt-2">{resultados.conflictos}</p>
              <p className="text-xs text-slate-500 mt-1">requieren revisión</p>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <p className="text-sm text-slate-600">Sin Recurso</p>
              <p className="text-3xl font-bold text-red-600 mt-2">{resultados.sinRecurso}</p>
              <p className="text-xs text-slate-500 mt-1">no hay asignación posible</p>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <p className="text-sm text-slate-600">Tasa de Éxito</p>
              <p className="text-3xl font-bold text-green-600 mt-2">
                {Math.round((resultados.procesados / resultados.totalServicios) * 100)}%
              </p>
              <p className="text-xs text-slate-500 mt-1">asignaciones exitosas</p>
            </Card>
          </div>

          {/* Asignaciones detalladas */}
          <Card>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Detalle de Asignaciones</h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {resultados.asignaciones.map((asign) => {
                const servicio = servicios.find(s => s.id === asign.servicioId)
                const chofer = choferes.find(c => c.id === asign.choferId)
                const vehiculo = vehiculos.find(v => v.id === asign.vehiculoId)

                return (
                  <div key={asign.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-slate-900">{servicio?.cliente}</p>
                        <p className="text-xs text-slate-600">{servicio?.tipo}</p>
                      </div>
                      <Badge variant="success">Asignado</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                      <div>
                        <span className="text-slate-500">Chofer:</span> {chofer?.nombre}
                      </div>
                      <div>
                        <span className="text-slate-500">Vehículo:</span> {vehiculo?.tipo}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs text-slate-600">Confianza:</span>
                      <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-600 rounded-full"
                          style={{ width: `${asign.nivelConfianza}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-900">{asign.nivelConfianza}%</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>

          <div className="flex gap-4">
            <Button variant="secondary" onClick={() => setEstado('idle')}>
              Ejecutar nuevamente
            </Button>
            <Button href="/escala">
              Ir a Escala Operativa
            </Button>
          </div>
        </>
      )}

      {/* Sin ejecutar */}
      {estado === 'idle' && !resultados && (
        <Alert variant="info" title="Cómo usar">
          Haz clic en "Ejecutar Algoritmo" para procesar automáticamente todos los servicios y generar una propuesta de asignación. El sistema analizará capacidades de vehículos, disponibilidad de choferes y todos los requisitos configurados en el Motor de Reglas.
        </Alert>
      )}
    </div>
  )
}
