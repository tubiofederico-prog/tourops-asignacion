import { BarChart3, AlertTriangle, Clock, CheckCircle2, XCircle, TrendingUp } from 'lucide-react'
import MetricCard from '../components/features/MetricCard'
import Card from '../components/ui/Card'
import Alert from '../components/ui/Alert'
import Badge from '../components/ui/Badge'
import { servicios } from '../data/servicios'
import { choferes } from '../data/choferes'
import { vehiculos } from '../data/vehiculos'

export default function Dashboard() {
  const choferesDisponibles = choferes.filter(ch => ch.estado === 'disponible').length
  const vehiculosDisponibles = vehiculos.filter(v => v.estado === 'disponible').length
  const porcentajeCompletado = 75
  const serviciosConConflicto = 2

  const proximosServicios = [
    { id: 'SRV001', cliente: 'María González', hora: '07:30', tipo: 'Traslado Aeropuerto' },
    { id: 'SRV002', cliente: 'Grupo ABC', hora: '08:00', tipo: 'Excursión Cataratas' },
    { id: 'SRV007', cliente: 'Empresa XYZ', hora: '07:00', tipo: 'Traslado Corporativo' }
  ]

  const alertas = [
    { id: 'A1', tipo: 'warning', titulo: 'Chofer con conflicto', msg: 'Roberto Silva no tiene disponibilidad para SRV008' },
    { id: 'A2', tipo: 'warning', titulo: 'Vehículo en mantenimiento', msg: 'VAN-002 requiere mantenimiento preventivo mañana' }
  ]

  const serviciosPorHora = [
    { hora: '06:00-08:00', cantidad: 4 },
    { hora: '08:00-10:00', cantidad: 3 },
    { hora: '10:00-12:00', cantidad: 2 },
    { hora: '14:00-16:00', cantidad: 2 },
    { hora: '16:00-18:00', cantidad: 1 }
  ]

  const maxServicios = Math.max(...serviciosPorHora.map(s => s.cantidad))

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard Operativo</h1>
        <p className="text-slate-600 mt-2">Resumen de la operación para mañana</p>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <MetricCard
          title="Servicios Cargados"
          value={servicios.length}
          subtitle="Para mañana"
          icon={BarChart3}
          color="blue"
        />
        <MetricCard
          title="Choferes Disponibles"
          value={choferesDisponibles}
          subtitle={`de ${choferes.length} totales`}
          icon={CheckCircle2}
          color="green"
          trend={12}
        />
        <MetricCard
          title="Vehículos Disponibles"
          value={vehiculosDisponibles}
          subtitle={`de ${vehiculos.length} totales`}
          icon={TrendingUp}
          color="blue"
        />
        <MetricCard
          title="Servicios Asignados"
          value="9"
          subtitle="Confirmados"
          icon={CheckCircle2}
          color="green"
        />
        <MetricCard
          title="Servicios con Conflicto"
          value={serviciosConConflicto}
          subtitle="Requieren revisión"
          icon={AlertTriangle}
          color="orange"
        />
        <MetricCard
          title="Completitud"
          value={`${porcentajeCompletado}%`}
          subtitle="De asignaciones"
          icon={TrendingUp}
          color="purple"
          trend={8}
        />
      </div>

      {/* Alertas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Alertas Operativas</h2>
          <div className="space-y-3">
            {alertas.map(alerta => (
              <Alert
                key={alerta.id}
                variant={alerta.tipo}
                title={alerta.titulo}
              >
                {alerta.msg}
              </Alert>
            ))}
          </div>
        </div>

        {/* Próximos servicios críticos */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Próximos Servicios Críticos</h2>
          <Card>
            <div className="space-y-3">
              {proximosServicios.map(srv => (
                <div key={srv.id} className="flex items-start gap-4 pb-3 border-b last:border-0">
                  <Clock size={18} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">{srv.hora}</div>
                    <div className="text-sm text-slate-600">{srv.cliente}</div>
                    <Badge variant="info" className="mt-1">{srv.tipo}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Gráfico de servicios por hora */}
      <Card>
        <h2 className="text-xl font-semibold text-slate-900 mb-6">Distribución de Servicios por Hora</h2>
        <div className="space-y-4">
          {serviciosPorHora.map(item => (
            <div key={item.hora} className="flex items-center gap-4">
              <div className="w-20 text-sm font-medium text-slate-700">{item.hora}</div>
              <div className="flex-1 h-8 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-end pr-3"
                  style={{ width: `${(item.cantidad / maxServicios) * 100}%` }}
                >
                  {item.cantidad > 0 && (
                    <span className="text-xs font-semibold text-white">{item.cantidad}</span>
                  )}
                </div>
              </div>
              <div className="w-8 text-right text-sm font-medium text-slate-700">{item.cantidad}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Nota final */}
      <Alert variant="info" title="Información">
        El dashboard se actualiza en tiempo real. Usa el motor de asignación para ejecutar el algoritmo de optimización.
      </Alert>
    </div>
  )
}
